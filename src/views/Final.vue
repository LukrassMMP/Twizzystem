<template>
  <div>

     <div id="header">
       <!-- <div id="question"> -->
           <h1 v-bind:id="'question' + $store.state.questionId"  class="question title">
             In der nächsten Show geht es um das Thema {{this.$store.state.winnerTopic.topicName}}!!!
           </h1>

      </div>


        <div v-if="selection" id="sidebar">
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

        <div v-else id="sidebar">
          <div id="sidebarlist">
            <div id="listTitle" class="sidebarlist"><strong>Alles korrekt beantwortet:</strong></div>
            <div id="listContainer" class="sidebarlist">
              <ul id="list">
                <li v-for="userName in this.$store.state.winner" :key="userName.userId">
                  {{ userName.userName }}
                </li>
              </ul>
            </div>
          </div>
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
          selection: true,
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
          if (data == 'redirect'){
            this.selection = false;
          }
        }
      },
      //end sockets

      //executed before destroied
      beforeDestroy(){

      }
}

</script>
