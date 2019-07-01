<template>
<b-container fluid id="app">

      <div id="video">
         <!-- Youtube Video -->
         <iframe width="560" height="315" src="https://www.youtube.com/embed/WlWNtmpUDT4?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&&playlist=WlWNtmpUDT4" frameborder="0" allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <!-- <iframe id="iframe" src="https://www.youtube.com/embed/L_LUpnjgPso?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1" frameborder="0"  allowfullscreen></iframe> -->
            <!-- <youtube :video-id="videoId" ></youtube> -->
          <!-- Facebook Video -->
          <!-- <iframe id="iframe" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F2329561167357285%2Fvideos%2F364234150796586%2F&show_text=0&width=560&controls=0&mute=1&autoplay=1&loop=1" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe> -->

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
   },
     // methods:{
     //   reload(){
     //     alert('no!')
     //     return;
     //   }
     // }

    };
    // window.onbeforeunload = function(event) {
    //     return confirm("Confirm refresh");
    // }

    // window.addEventListener('unload', this.reload)



</script>

<style>
    @import './css/style.css';
</style>
