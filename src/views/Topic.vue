topicName<template>
  <div>

     <div id="header">
       <!-- <div id="question"> -->
       <!-- check, if last answer was correct -->
           <h1 v-bind:id="'question' + $store.state.questionId"  class="question title" v-if="$store.state.victory">
             Wähle das Thema für die nächste Show!
           </h1>
           <h1 v-bind:id="'question' + $store.state.questionId"  class="question title" v-else>
            Nur die Gewinner der Show können das nächste Thema wählen!
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
          <!-- v-if to avert error (topics not defined) -->
          <!-- votecategorie: disable buttons, send vote to database and all other clients via Websocket -->
          <!-- changebutton: add active class to pushed button -->
          <button v-if="$store.state.topics[0]"
                      id="topic1"
                      class ="categorie"
                      v-on:click="changebutton('topic1'); votetopic($store.state.topics[0].topicId);"
                      :disabled = "disabled">

                      <div>{{this.$store.state.topics[0].topicName}}</div>
                      <div class="number" v-bind:class="{ hidden: !disabled }">{{$store.state.topics[0].topicVotes}}</div>
              </button>

              <!-- v-if to avert error (topics not defined) -->
              <!-- votecategorie: disable buttons, send vote to database and all other clients via Websocket -->
              <!-- changebutton: add active class to pushed button -->
            <button v-if="$store.state.topics[1]"
                        id="topic2"
                        class ="categorie"
                        v-on:click="changebutton('topic2'); votetopic($store.state.topics[1].topicId); "
                        :disabled = "disabled">

                      <div>{{this.$store.state.topics[1].topicName}}</div>
                      <div class="number" v-bind:class="{ hidden: !disabled }">{{$store.state.topics[1].topicVotes}}</div>
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
            router.push({path: 'final'});
          }
        },

        //write votes from other clients into global-topics
        vote(data){
          console.log("data = " + data);
          console.log("topicID = " + this.$store.state.topics[0].topicId);
          console.log("Object: " + this.$store.state.topics[0]);
          // console.log("Votes vor der Abstimmung: " + this.$store.state.topics[0].topicVotes + " & " + this.$store.state.topics[1].topicVotes)
          if (data == this.$store.state.topics[0].topicId){
            this.$store.state.topics[0].topicVotes++;
            // console.log("Kategorie " + this.$store.state.topics[0].topicName + " um 1 erhöht: " + this.$store.state.topics[0].topicVotes);
          } else if (data == this.$store.state.topics[1].topicId){
            this.$store.state.topics[1].topicVotes++;
            // console.log("Kategorie " + this.$store.state.topics[1].categorieName + " um 1 erhöht: " + this.$store.state.topics[1].topicVotes);
          }
          // console.log("Votes nach der Abstimmung: " + this.$store.state.topics[0].topicVotes + " & " + this.$store.state.topics[1].topicVotes);
        },
      //end socket
      },

      //executed when loaded
      //gettopics, starts timer and checks lastCorrectAnswer
      created(){
        //check, if user answered all question correct. If false, set local disabled to true
        //else, disabled = true (buttons disabled)
        if (!this.$store.state.victory){
          this.disabled = true;
        }

        // gets topics (DB) from current round and writes it into global topics
        this.gettopics(2, 3);

        //starts Timer
        this.startTimer();

      },

      //executed befor destroied
      //stops countdown, setup globalvariables for next round: questionId, categorieA, categorieB and roundNr
      beforeDestroy(){
        //stop countdown
        clearInterval(this.interval);

        //Check, witch topic won and sets global winnerTopic.
        this.getwinnertopic();

      },

      methods:{
        // gets topics from current round and writes it into global topics
        gettopics(topicId1, topicId2){

          axios.get(this.$store.state.databaseUrl, {
            params: {
              topicId1: topicId1,
              topicId2: topicId2,
              function: 'gettopics',
            }
          })
          .then(response => {
            //handle success
             this.$store.state.topics = response.data;
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
        votetopic: function(topicId){
          //disable buttons
          this.disabled = true

          //formData with all variables for the database (voted topicId and function-name)
          let formData = new FormData();
          formData.append('topicId', topicId);
          formData.append('function', 'votetopic');

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
            this.$socket.emit('vote', topicId);
          })
          .catch(function (error) {
            //handle error
            alert("Uh! Konnte nicht validiert werden.")
            console.log(error)
          });


        },

        //add active class to pushed button and emit vote to all other users
        changebutton(topic){

            //emit given vote to all other users
            this.$socket.emit('answer', topic);

            //add active class to pushed button
            document.getElementById(topic).className += " active";
        },


        //Check, witch topic won and sets global winnerTopic. If votes equal, topic 0 wins (has to be randomized for the future)
        getwinnertopic(){

          if (this.$store.state.topics[0].topicVotes > this.$store.state.topics[1].topicVotes){
            this.$store.state.winnerTopic = this.$store.state.topics[0];

          } else if (this.$store.state.topics[0].topicVotes < this.$store.state.topics[1].topicVotes){
            this.$store.state.winnerTopic = this.$store.state.topics[1];

          } else {

              this.$store.state.winnerTopic = this.$store.state.topics[0];

          }

          console.log(this.$store.state.winnerTopic)

        },


      }
}
</script>
