<template>
  <div>

    <div id="header">
      <h1>TWIZZY</h1>
    </div>

    <div id="sidebar">
      <div id="sidebarlist">
        <div id="listTitle" class="sidebarlist"><strong>Teilnehmer:</strong></div>
        <div id="listContainer" class="sidebarlist">
          <ul id="list">
            <!-- refresh everytime, someone sends a new name over Websocket -->
            <li v-for="userName in this.$store.state.userNames" :key="userName.userId">
              {{ userName.userName }}
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
    import router from '../router';
    import axios from 'axios';

  export default{
    data() {
      return{
      }
    },

    sockets: {
      connect() {
        this.isConnected = true;
      },

      disconnect() {
        this.isConnected = false;
      },

      start(data){
        if(data == 'start'){
          router.push({path: 'question'});
        }
      },
      newuser(data){
        this.$store.state.userNames.push({userName:data});
      },

      redirect(data){

        this.getusers();

        if (this.$store.state.userId == data){
          alert("Bitte wähle einen anständigen Name. Du wurdest vom Host gekickt...");

          router.push({path: '/'});
        }
      },

    },

    methods:{
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
    },

  }

  </script>
