<template>
  <div>

    <div id="header">
      <h1 class="titleAlone">TWIZZY</h1>
      <p>Bitte starte das Video (falls nicht automatisch geschehen)<p>
    </div>

    <div id="sidebar">
      <div id="sidebarlist">
        <h2 id="listTitle" class="sidebarlist titleAlone">Users</h2>
        <div id="listContainer" class="sidebarlist list">
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
          alert("Bitte wähle einen anständigen Namen. Du wurdest vom Host gekickt...");

          router.push({path: '/'});
        }
      },

    },

    created(){
      //unmute Video
      document.getElementById('iframe').src = "https://www.youtube.com/embed/WlWNtmpUDT4?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&playsinline=1&autoplay=1";
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
    },

  }

  </script>
