<template>
  <div>

     <div id="header">
       <!-- <div id="question"> -->
           <h1 v-bind:id="'question' + $store.state.questionId"  class="question">
             In der nächsten Show geht es um das Thema {{this.$store.state.winnerTopic.topicName}}!!!
           </h1>

      </div>


        <div id="sidebar">
          <!-- v-if to avert error (topics not defined) -->
          <!-- add correct-class to winnerTopic -->
          <button v-if="$store.state.topics[0]" id="categorie1"
                      class ="categorie"
                      v-bind:class ="{ correct: this.$store.state.winnerTopic.topicName == this.$store.state.topics[0].topicName}"
                      disabled>

                      <div>{{this.$store.state.topics[0].topicName}}</div>
                      <div class="number">{{$store.state.topics[0].topicVotes}}</div>

              </button>

              <!-- v-if to avert error (topics not defined) -->
              <!-- add correct-class to winnerTopic -->
            <button v-if="$store.state.topics[1]" id="categorie2"
                        class ="categorie"
                        v-bind:class ="{ correct: this.$store.state.winnerTopic.topicName == this.$store.state.topics[1].topicName}"
                        disabled>

                        <div>{{this.$store.state.topics[1].topicName}}</div>
                        <div class="number">{{$store.state.topics[1].topicVotes}}</div>
            </button>
        </div>

    </div>
</template>

<script>

    export default{
      data() {
        return {
          isConnected: false,
          result: '',
          disabled: false,
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

        }
      },
      //end sockets

      //executed before destroied
      beforeDestroy(){

      }
}

</script>
