<template>
<b-container fluid id="app">

      <div id="video">
            <!-- <iframe  src="https://www.youtube.com/embed/L_LUpnjgPso?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1" frameborder="0"  allowfullscreen></iframe> -->

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
      }
    };
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    #video{
        position: absolute;
        background-color: black;
        width: 75vw;
        height: 75vh;
        top: 25vh;
        left: 0px;
    }
    #video iframe {
      width: 100%;
      height: 100%;
    }
    #header {
        top: 0;
        color: #000;
        position: absolute;
        width: 75vw;
        height: 25vh;
        top: 0;
        left: 0;
        background-color: white;
        /* padding-top: 1vh; */
    }

    .hidden{
        display: none;
    }

    #input{
        position: absolute;
        left: 40vw;
        top: 40vh;
        width: 20vw;
        height: 20vh;
    }

    #input input{
        position: absolute;
        top: 0;
        left: 0;
        height: 10vh;
        width: 20vw;
    }
    #input button{
        position: absolute;
        top: 10vh;
        left: 0;
        height: 10vh;
        width: 20vw;
    }

    .question {
      height: 20vh;
      width: 75vw;
    }

    #progressbar {
      height: 4vh;
      width: 75vw;
    }

    #sidebar{
      position: absolute;
      text-align: left;
      left: 75vw;
      width: 25vw;
      height: 100vh;
      top: 0;
      background: white;
      /* padding-left: 1vw;
      padding-top: 1vh; */
    }

    .sidebarlist{
      /* padding-left: 1vw;
      padding-top: 1vh; */
    }

    .categorie{
      height: 50vh;
      width: 25vw;
      background-color: white;
    }

    .answer{
        height: 25vh;
        width: 25vw;
        background-color: white;
        /* font-size: 1em;
        border: 2px solid red;
        background-color: white;
        color: red; */
    }

    .active {
      border: 2px solid blue;
      color: blue;
    }

    /* have to be before .correct definition */
    .false {
      border: 2px solid red;
      color: red;
    }
    /* have to be after .false definition */
    .correct {
      border: 2px solid green;
      color: green;
    }

    #listTitle{
      height: 5vh;
      top: 0;
    }

    #listContainer{
      display: flex;
      flex-direction: column;
      height: 95vh;
    }

    #list{
      margin-top: auto;
      margin-bottom: auto;
    }

    /* #answerA{
        top:0;
    }
    #answerB{
        top:25vh;
    }
    #answerC{
        top:50vh;
    }
    #answerD{
        top:75vh;
    } */


</style>
