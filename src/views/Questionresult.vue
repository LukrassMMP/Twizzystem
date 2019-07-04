<template>
  <div>

     <div id="header">
       <!-- <div id="question"> -->
           <h3 v-bind:id="'question' + $store.state.questionId"  class="question title">
             {{this.$store.state.question.questionName}}

           </h3>

           <div id="progressbar" v-if="lastCorrectAnswer">
             GRATULATION!

           </div>
           <div id="progressbar" v-else>
             Villeicht beim nächsten Mal...

           </div>

           <audio controls autoplay hidden v-if="lastCorrectAnswer">
              <source src="../assets/frage_richtig.ogg" type="audio/ogg">
           </audio>
           <audio controls autoplay hidden v-else>
              <source src="../assets/frage_falsch.wav" type="audio/wav">
           </audio>

      </div>


        <div id="sidebar">
          <!-- v-bind add false class to given answer. Adds correct class to the correct answer -->
          <button id="answerA"
                      class ="answer btn"
                      v-bind:class ="{ false: this.$store.state.givenAnswer == 'answerA',
                        correct: this.$store.state.question.correctAnswer == 'answerA'}
                        "
                      disabled>

                      <div>{{this.$store.state.question.answerA}}</div>
                      <div class="number">{{$store.state.answerA}}</div>

              </button>

              <!-- v-bind add false class to given answer. Adds correct class to the correct answer -->
            <button id="answerB"
                        class ="answer btn"
                        v-bind:class ="{ false: this.$store.state.givenAnswer == 'answerB',
                          correct: this.$store.state.question.correctAnswer == 'answerB'}"
                        disabled>

                        <div>{{this.$store.state.question.answerB}}</div>
                        <div class="number"> {{$store.state.answerB}}</div>

              </button>

              <!-- v-bind add false class to given answer. Adds correct class to the correct answer -->
            <button id="answerC"
                        class ="answer btn"
                        v-bind:class ="{ false: this.$store.state.givenAnswer == 'answerC',
                          correct: this.$store.state.question.correctAnswer == 'answerC'}"
                        disabled>

                        <div>{{this.$store.state.question.answerC}}</div>
                        <div class="number">{{$store.state.answerC}}</div>

              </button>

              <!-- v-bind add false class to given answer. Adds correct class to the correct answer -->
            <button id="answerD"
                        class ="answer btn"
                        v-bind:class ="{ false: this.$store.state.givenAnswer == 'answerD',
                          correct: this.$store.state.question.correctAnswer == 'answerD'}"
                        disabled>

                        <div>{{this.$store.state.question.answerD}}</div>
                        <div class="number">{{$store.state.answerD}}</div>

              </button>
        </div>

    </div>
</template>

<script>
    import router from '../router';


    export default{
      data() {
        return {
          isConnected: false,
          result: '',
          disabled: false,
          lastCorrectAnswer: false,
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
            // check, if this was the last Question. If true, redirect to the result, else redirect to categorie-choice
            if (this.$store.state.roundNr == this.$store.state.totalRounds){
              router.push({path: 'result'});
            } else {
            router.push({path: 'categorie'});
            }
          }
        }
      },
      //executed when loaded
      created(){
        //check, if last answer was correct. If true, set local lastCorrectAnswer to true.
        if(this.$store.state.correctAnswer){
          this.lastCorrectAnswer = true;
        }else {
          this.lastCorrectAnswer = false;
        }

      },

      // mounted: function(){
      //   var sound = new Howl({
      //     src: './assets/TestSound.wav',
      //     autoplay: true,
      //     loop: false,
      //     volume: 1,
      //     onend: function(){
      //         console.log("Sound finished");
      //     }
      //   });
      // },

      // executed before destroied
      beforeDestroy(){
        //reset the number of answers given
        this.$store.state.answerA = 0;
        this.$store.state.answerB = 0;
        this.$store.state.answerC = 0;
        this.$store.state.answerD = 0;
      }

}

</script>
