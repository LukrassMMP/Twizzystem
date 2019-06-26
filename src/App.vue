<template>
<b-container fluid id="app">

      <div id="video">
            <iframe id="iframe" src="https://www.youtube.com/embed/L_LUpnjgPso?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1" frameborder="0"  allowfullscreen></iframe>
            <!-- <youtube :video-id="videoId" ></youtube> -->
      </div>
      <router-view />

  </b-container>
</template>

<script>
//    import HelloWorld from "@/components/HelloWorld.vue";

    export default {
      name: "home",
      components: {
//        HelloWorld
    },

     data() {
       return{
    //   videoId: 'bbLDfueL7eU?showinfo=0&controls=0',
     }
     }
    };
</script>

<style>
    @import './css/style.css';
</style>
