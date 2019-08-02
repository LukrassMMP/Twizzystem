<template>
  <div>
      <div id="header" style="width: 75vw;">
        <h1 class="title">Die interaktive Live-Show!</h1>
      </div>
      <div id="sidebar">
        <h2 id="listContainer" class="sidebarlist titleAlone" style="margin-top: 25vh;">17:00</h2>
        <h2 id="listContainer" class="sidebarlist titleAlone" style="margin-top: 10vh;" >02</h2>
        <h2 id="listContainer" class="sidebarlist titleAlone" >08</h2>
        <h2 id="listContainer" class="sidebarlist titleAlone" >2019</h2>
      </div>
  </div>
</template>

<script>


    export default{
      data() {
        return {
          isConnected: false,
        }
      },

      //executed when Side is loaded
      created(){

      },

      beforeDestroy(){

      },

      methods:{

        },



    }
</script>

<style media="screen">


  /* #video{
    width: 100vw;
    height: 75vh;
  }
  h1{
    font-size: 10vh;
  }
  #header{
    width: 100vw;
    height: 25vh;
  }

  .title{
    margin-top: 5vh;

  } */
</style>
