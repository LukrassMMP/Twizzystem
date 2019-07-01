<template>
  <div>
      <div id="header">
        <h1 class="title">TWIZZY</h1>
      </div>

      <div id="sidebar">
        <div id="sidebarlist">
          <h2 id="loginTitle" class="sidebarlist title"><strong>Login</strong></h2>
          <!-- <div id="listContainer" class="sidebarlist">
            <ul id="list"> -->
              <!-- on load: get userNames from database. refresh everytime, a new user send his Name over Websocket -->
              <!-- <li v-for="userName in this.$store.state.userNames" :key="userName.userId">
                {{ userName.userName }}
              </li>
            </ul>
          </div> -->
        </div>

      </div>

      <div id="input">
        <!-- write userName in database, gets userId and saves all to the store -->
        <form @submit.prevent="createuser()">
            <input name="name" type="text" placeholder="Name" v-model="$store.state.userName"/>
            <button class="btn btn-info" type="submit">Einloggen</button>
        </form>
      </div>

  </div>
</template>

<script>
    import axios from 'axios';
    import router from '../router';

    export default{
      data() {
        return {
          isConnected: false,
        }
      },

      sockets: {
        connect() {
          this.isConnected = true;
        },

        disconnect() {
          this.isConnected = false;
        },

        newuser(data){
          this.$store.state.userNames.push({userName:data});
        },
        redirect(data){
          if(data != 'redirect'){
            this.getusers();
          }
        }
      },

      //executed when Side is loaded
      created(){
      this.getusers();
      },

      methods:{
        // togglehide(){
        //     this.$store.commit('togglehide')
        // },

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

        //create new user on DB
        createuser(){

          //unmute the video
          document.getElementById('iframe').src = "https://www.youtube.com/embed/WlWNtmpUDT4?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1&loop=1"

          //Check, if userName ist empty
          if(this.$store.state.userName != ''){
            let formData = new FormData();
            formData.append('username', this.$store.state.userName);
            formData.append('function', 'createuser');

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
              //handle success

              //saves userId to global-store
              this.$store.state.userId = response.data[1];


              this.$socket.emit('newuser', this.$store.state.userName);

              //prov. Datenbankprobleme
              // this.$store.state.userId = 1;

              router.push({path: 'start'});
              // alert(response.data[1])
            })
            .catch(function (error) {
              //handle error
              alert("Uh! Konnte nicht validiert werden.")
              console.log(error)

            });
          } else {
            alert("Bitte gib einen Namen ein")
          }

          // Enter Fullscreen
          // this.fullscreen();


        },

        fullscreen(){

            // document.getElementsByTagName("body")[0].requestFullscreen();

            var elem = document.getElementsByTagName("body")[0];

              if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement){
                  if(elem.requestFullscreen){
                      elem.requestFullscreen();
                  } else if(elem.msRequestFullscreen){
                      elem.msRequestFullscreen();
                  } else if(elem.mozRequestFullScreen){
                      elem.mozRequestFullScreen();
                  } else if(elem.webkitRequestFullscreen){
                      elem.webkitRequestFullscreen(elem.ALLOW_KEYBOARD_INPUT);
                  }
              } else {
                  if(document.exitFullscreen){
                      document.exitFullscreen();
                  } else if(document.msExitFullscreen){
                      document.msExitFullscreen();
                  } else if(document.mozCancelFullScreen){
                      document.mozCancelFullScreen();
                  } else if(document.webkitExitFullscreen){
                      document.webkitExitFullscreen();
                  }
              }
          }
        },



    }

</script>
