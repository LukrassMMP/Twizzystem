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
            <li v-for="userName in this.$store.state.userNames">
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
      }
    },

  }

  </script>
