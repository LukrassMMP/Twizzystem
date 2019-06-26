<template>
  <div>

     <div id="header">
       <!-- <div id="question"> -->
           <h1 v-bind:id="'question' + $store.state.questionId"  class="question title">
             {{this.$store.state.winnerCategorie.categorieName}} hat gewonnen!!!
           </h1>

      </div>


        <div id="sidebar">
          <!-- v-if to avert error (categories not defined) -->
          <!-- add correct-class to winnerCategorie -->
          <button v-if="$store.state.categories[0]" id="categorie1"
                      class ="categorie"
                      v-bind:class ="{ correct: this.$store.state.winnerCategorie.categorieName == this.$store.state.categories[0].categorieName}"
                      disabled>

                      <div>{{this.$store.state.categories[0].categorieName}}</div>
                      <div class="number">{{$store.state.categories[0].categorieVotes}}</div>

              </button>

              <!-- v-if to avert error (categories not defined) -->
              <!-- add correct-class to winnerCategorie -->
            <button v-if="$store.state.categories[1]" id="categorie2"
                        class ="categorie"
                        v-bind:class ="{ correct: this.$store.state.winnerCategorie.categorieName == this.$store.state.categories[1].categorieName}"
                        disabled>

                        <div>{{this.$store.state.categories[1].categorieName}}</div>
                        <div class="number">{{$store.state.categories[1].categorieVotes}}</div>
            </button>
        </div>

    </div>
</template>

<script>

    import router from '../router'

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
              router.push({path: 'question'});
          }
        }
      },
      //end sockets

      //executed before destroied
      beforeDestroy(){
        //reset the number of votes
        this.$store.state.answerA = 0;
        this.$store.state.answerB = 0;
      }
}

</script>
