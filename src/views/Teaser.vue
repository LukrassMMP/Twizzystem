<template>
  <div>
      <div id="header">
        <h1 class="title">2019</h1>
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

      methods:{

        },



    }
</script>

<style media="screen">
  #video{
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

  }
</style>
