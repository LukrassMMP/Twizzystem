<template>
  <div>

     <div id="header">
       <!-- <div id="question"> -->
       <!-- check, if last answer was correct -->
           <h1 v-bind:id="'question' + $store.state.questionId"  class="question title" v-if="lastCorrectAnswer">
             Wähle die nächste Kategorie!
           </h1>
           <h1 v-bind:id="'question' + $store.state.questionId"  class="question title" v-else>
             Nur Gewinner können wählen...
           </h1>

           <b-progress id="progressbar"
                        :max="$store.state.time"
                        animated
                        >
                        <b-progress-bar
                            :value="currentTime"
                            >
                          </b-progress-bar>
            </b-progress>

      </div>


        <div id="sidebar">
          <!-- v-if to avert error (categories not defined) -->
          <!-- votecategorie: disable buttons, send vote to database and all other clients via Websocket -->
          <!-- changebutton: add active class to pushed button -->
          <button v-if="$store.state.categories[0]"
                      id="categorie1"
                      class ="categorie"
                      v-on:click="changebutton('categorie1'); votecategorie($store.state.categories[0].categorieId);"
                      :disabled = "disabled">

                      <div>{{this.$store.state.categories[0].categorieName}}</div>
                      <div class="number" v-bind:class="{ hidden: !disabled }">{{$store.state.categories[0].categorieVotes}}</div>

              </button>

              <!-- v-if to avert error (categories not defined) -->
              <!-- votecategorie: disable buttons, send vote to database and all other clients via Websocket -->
              <!-- changebutton: add active class to pushed button -->
            <button v-if="$store.state.categories[1]"
                        id="categorie2"
                        class ="categorie"
                        v-on:click="changebutton('categorie2'); votecategorie($store.state.categories[1].categorieId); "
                        :disabled = "disabled">

                      <div>{{this.$store.state.categories[1].categorieName}}</div>
                      <div class="number" v-bind:class="{ hidden: !disabled }">{{$store.state.categories[1].categorieVotes}}</div>

            </button>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import router from '../router'

    export default{
      data() {
        return {
          isConnected: false,
          disabled: false,
          lastCorrectAnswer: false,
          //for the Timer
          intervall: null,
          currentTime: this.$store.state.time,
        }
      },

      sockets: {
        connect() {
          this.isConnected = true;
        },

        disconnect() {
          this.isConnected = false;
        },
        redirect(data){
          if(data == 'redirect'){
            router.push({path: 'categorieresult'});
          }
        },

        //write votes from other clients into global-categories
        vote(data){
          // console.log(data);
          // console.log("Votes vor der Abstimmung: " + this.$store.state.categories[0].categorieVotes + " & " + this.$store.state.categories[1].categorieVotes)
          if (data == this.$store.state.categories[0].categorieId){
            this.$store.state.categories[0].categorieVotes++;
            // console.log("Kategorie " + this.$store.state.categories[0].categorieName + " um 1 erhöht: " + this.$store.state.categories[0].categorieVotes);
          } else if (data == this.$store.state.categories[1].categorieId){
            this.$store.state.categories[1].categorieVotes++;
            // console.log("Kategorie " + this.$store.state.categories[1].categorieName + " um 1 erhöht: " + this.$store.state.categories[1].categorieVotes);
          }
          // console.log("Votes nach der Abstimmung: " + this.$store.state.categories[0].categorieVotes + " & " + this.$store.state.categories[1].categorieVotes);
        },

      //end socket
      },

      //executed when loaded
      //getcategories, starts timer and checks lastCorrectAnswer
      created(){
        //check, if last answer was correct. If true, set local lastCorrectAnswer to true and resets the clobal correctAnswer to false
        //if last answer was incorrect, disabled = true (buttons disablec)
        if (this.$store.state.correctAnswer){
          this.lastCorrectAnswer = true;
          this.$store.state.correctAnswer = false;
        } else {
          this.disabled = true;
        }

        // gets categories (DB) from current round and writes it into global categories
        this.getcategories(this.$store.state.categorieA, this.$store.state.categorieB);

        //starts Timer
        this.startTimer();

      },

      //executed befor destroied
      //stops countdown, setup globalvariables for next round: questionId, categorieA, categorieB and roundNr
      beforeDestroy(){
        //stop countdown
        clearInterval(this.interval);

        //set global questionId to next questionId for next round (defined by winnerCategorie)
        this.getnextquestionid();

        // at the end
        // prepare global categories for next round
        this.$store.state.categorieA = this.$store.state.categorieA + 2;
        this.$store.state.categorieB = this.$store.state.categorieB + 2;
        // set roundNr +1
        this.$store.state.roundNr++;
      },

      methods:{
        // gets categories from current round and writes it into global categories
        getcategories(categorieId1, categorieId2){

          axios.get(this.$store.state.databaseUrl, {
            params: {
              categorieId1: categorieId1,
              categorieId2: categorieId2,
              function: 'getcategories',
            }
          })
          .then(response => {
            //handle success
             this.$store.state.categories = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
        },

        //starts Timer
        startTimer: function(){
          this.interval = setInterval(() =>{
            this.currentTime = this.currentTime - 0.1;
            if(this.currentTime == 0){
              clearInterval(this.interval);
            }
            // console.log(this.currentTime);
          }, 100);

        },

        //disable buttons, send vote to database and all other clients via Websocket
        votecategorie: function(categorieId){
          //disable buttons and enables number of given answers
          this.disabled = true;

          //formData with all variables for the database (voted categorieID and function-name)
          let formData = new FormData();
          formData.append('categorieId', categorieId);
          formData.append('function', 'votecategorie');

          //??
          var contact = {};
          formData.forEach(function(value, key){
            contact[key] = value;
          });

          axios({
            method: 'post',
            url: this.$store.state.databaseUrl,
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }},
          })
          .then( response => {
            // console.log("Kategorie gewählt" + response);
            //handle success
            // alert("Success");
            this.$socket.emit('vote', categorieId);
          })
          .catch(function (error) {
            //handle error
            alert("Uh! Konnte nicht validiert werden.")
            console.log(error)
          });


        },

        //add active class to pushed button
        changebutton(categorie){

            console.log(categorie);
            //emit the given answer to all other users


            document.getElementById(categorie).className += " active";
        },

        // set global questionId to next questionId for next round (defined by winnerCategorie)
        getnextquestionid(){
          //Check, witch categorie won and sets global winnerCategorie. If votes equal, categorie 0 wins (has to be randomized for the future)
          this.getwinnercategorie();

          axios.get(this.$store.state.databaseUrl, {
            params: {
              categorieId: this.$store.state.winnerCategorie.categorieId,
              function: 'getnextquestionid',
            }
          })
          .then(response => {
            //handle success

            // set global questionId to next questionId for next round (defined by winnerCategorie)
            this.$store.state.questionId = response.data[0].questionId;

          })
          .catch(function (error) {
            console.log(error);
          });

          // return questionId;
        },
        //Check, witch categorie won and sets global winnerCategorie. If votes equal, categorie 0 wins (has to be randomized for the future)
        getwinnercategorie(){

          if (this.$store.state.categories[0].categorieVotes > this.$store.state.categories[1].categorieVotes){
            this.$store.state.winnerCategorie = this.$store.state.categories[0];

          } else if (this.$store.state.categories[0].categorieVotes < this.$store.state.categories[1].categorieVotes){
            this.$store.state.winnerCategorie = this.$store.state.categories[1];

          } else {

              this.$store.state.winnerCategorie = this.$store.state.categories[0];

          }

        },


      }
}
</script>
