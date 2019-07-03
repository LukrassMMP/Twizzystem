<template>
  <div>

     <div id="header">
       <!-- <div id="question"> -->
           <h3 v-bind:id="'question' + $store.state.questionId"  class="question title">
             {{this.$store.state.question.questionName}}
           </h3>
           <b-progress id="progressbar"
                        :max="$store.state.time"
                        animated
                        >
                        <b-progress-bar
                            :value="currentTime"
                            >
                          </b-progress-bar>
            </b-progress>
        <!-- </div> -->
      </div>


        <div id="sidebar">
          <button id="answerA"
                      class ="answer button btn"
                      v-on:click="activeButton('answerA')"
                      :disabled= "disabled">
                    <div>{{this.$store.state.question.answerA}}</div>
                    <div class="number hidden">{{$store.state.answerA}}</div>
              </button>

            <button id="answerB"
                        class ="answer button btn"
                        v-on:click="activeButton('answerB')"
                        :disabled= "disabled">
                      <div>{{this.$store.state.question.answerB}}</div>
                      <div class="number hidden"> {{$store.state.answerB}}</div>
              </button>

            <button id="answerC"
                        class ="answer button btn"
                        v-on:click="activeButton('answerC')"
                        :disabled= "disabled">
                <div>{{this.$store.state.question.answerC}}</div>
                <div class="number hidden">{{$store.state.answerC}}</div>
              </button>

            <button id="answerD"
                        class ="answer button btn"
                        v-on:click="activeButton('answerD')"
                        :disabled= "disabled">
                <div>{{this.$store.state.question.answerD}}</div>
                <div class="number hidden">{{$store.state.answerD}}</div>
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
            router.push({path: 'questionresult'});
          }else{
              this.getusers();
          }
        },

        //counts given answers
        answer(data){
          if(data == 'answerA'){
            this.$store.state.answerA++;
          }
          if(data == 'answerB'){
            this.$store.state.answerB++;
          }
          if(data == 'answerC'){
            this.$store.state.answerC++;
          }
          if(data == 'answerD'){
            this.$store.state.answerD++;
          }
        }
      },
      //executed when loaded
      created(){
        this.getquestion();
        this.startTimer();
      },
      //executed befor destroied
      beforeDestroy(){
        //stop countdown
        clearInterval(this.interval);
      },

      methods:{

        //get users from database and stores it into global userNames
        getusers(){

          axios.get(this.$store.state.databaseUrl, {
            params: {
              function: 'getusers',
            }
          })
          .then(response => {
            //handle success
            this.$store.state.userNames = response.data;
            // alert(this.$store.state.userNames)
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
            console.log("currentTime: " + this.currentTime);
          }, 100);
        },

        //deactivates the buttons, and check if answer is correct
        activeButton(answerId){
          //deactivates the buttons
            this.disabled = true;

            //check, if answer is correct. If true, set correctAnswer to true and count the number of correctAnswers + 1
            if (this.$store.state.question.correctAnswer == answerId){
              console.log("correct Answer");
              this.$store.state.correctAnswer = true;
              this.$store.state.correctAnswers++;
            }

            // set "active" class to pushed button
            document.getElementById(answerId).className += " active";

            //write given answerId including number of correct Answers (overall) into database (user)
            this.writeanswer(answerId, this.$store.state.correctAnswers);

            //emit the given answer to all other users via Websocket to count the answer
            this.$socket.emit('answer', answerId);

            //set global givenAnswer to answerA, answerB, answerC or answerD
            this.$store.state.givenAnswer = answerId;

            //makes number visible on answer-buttons
            var numbers = document.getElementsByClassName('number')
            var i;
            for (i = 0; i <  numbers.length; i++) {
              numbers[i].classList.remove("hidden");
            }



        },

        //write given answerId including number of correct Answers (overall) into database (user)
        writeanswer(answerId, correctAnswers){
          // console.log(this.$store.state.userId + ", " + answerId + ", " + correctAnswers);

          //defines the name of the column of the current answer
          var answerNr = "answer" + this.$store.state.roundNr;

          //FormData including all the data for the database (userId, answerNr, answerId, correctAnswers and the function-name)
          let formData = new FormData();
          formData.append('userId', this.$store.state.userId);
          formData.append('answerNr', answerNr);
          formData.append('answerId', answerId);
          formData.append('correctAnswers', correctAnswers)
          formData.append('function', 'writeanswer');

          //??
          var contact = {};
          formData.forEach(function(currentTime, key){
            contact[key] = currentTime;
          });

          axios({
            method: 'post',
            url: this.$store.state.databaseUrl,
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }},
          })
          .then( response => {
            console.log(response);
            //handle success
            // alert("Antwort erfolgreich eingetragen")
          })
          .catch(function (response) {
            //handle error
            alert("Uh! Konnte nicht validiert werden.")
            console.log(response)
          });
        },

        getquestion(){
          console.log(this.$store.state.questionId);
          axios.get(this.$store.state.databaseUrl, {
            params: {
              questionId: this.$store.state.questionId,
              function: 'getquestion',
            }
          })
          .then(response => {
            //handle success

            // get question and stores into global store
            this.$store.state.question = response.data[0];
            console.log(this.$store.state.question);


          })
          .catch(function (error) {
            console.log(error);
          });


        },
      },

    }
</script>
