<template>
  <div>

     <div id="header">
       <!-- <div id="question"> -->
           <h1 class="title">Resultat</h1>

      </div>


        <div id="sidebar">
          <div id="sidebarlist">
            <div id="listTitle" class="sidebarlist"><strong>Alles korrekt beantwortet:</strong></div>
            <div id="listContainer" class="sidebarlist">
              <ul id="list">
                <li v-for="userName in this.winner" :key="userName.userId">
                  {{ userName.userName }}
                </li>
              </ul>
            </div>
          </div>
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
          result: '',
          winner: '',
          //for the Timer
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
            router.push({path: 'topic'});
          }
        }
      },
      //executed when loaded
      created(){
        this.getwinneruser();
      },
      //executed befor destroied
      beforeDestroy(){

      },

      methods:{
        getwinneruser(){

          //set global Victory to truth if all answers correct
          if (this.$store.state.roundNr == this.$store.state.correctAnswers){
            this.$store.state.victory = true;
          }

          axios.get(this.$store.state.databaseUrl, {
            params: {
              correctAnswers: this.$store.state.roundNr,
              function: 'getwinneruser',
            }
          })
          .then(response => {
            //handle success
            this.winner = response.data;
             this.$store.state.winner = this.winner;


          })
          .catch(function (error) {
            console.log(error);
          });
        },
      }
}


</script>
