<template>
  <div>
      <div id="header">

      </div>

      <div id="sidebar">
        <div id="sidebarlist">
          <div id="listTitle" class="sidebarlist"><strong>Teilnehmer:</strong></div>
          <div id="listContainer" class="sidebarlist">
            <ul id="list">
              <!-- on load: get userNames from database. refresh everytime, a new user send his Name over Websocket -->
              <li v-for="userName in this.$store.state.userNames">
                {{ userName.userName }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="input">
        <!-- write userName in database, gets userId and saves all to the store -->
        <form @submit.prevent="createuser()">
          <input name="name" type="text" placeholder="Name" v-model="$store.state.userName"/>
            <button type="submit">Einloggen & Fullscreen</button>
        </form>
              <!-- <input id="startInput" name="name" type="text" placeholder="Name" v-model="$store.state.userName">
              <router-link id="Add" tag="button"  to="/start" v-on:click.native="createuser()">Let's go</router-link> -->
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
        }
      },

      //executed when Side is loaded
      created(){
      this.getusernames();
      },

      methods:{
        // togglehide(){
        //     this.$store.commit('togglehide')
        // },

        getusernames(){

          axios.get(this.$store.state.databaseUrl, {
            params: {
              function: 'getusernames',
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


        createuser(){
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

            // alert(response.data[1])
          })
          .catch(function (error) {
            //handle error
            alert("Uh! Konnte nicht validiert werden.")
            console.log(error)

          });

          // Enter Fullscreen
          // this.fullscreen();

          router.push({path: 'start'});
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
