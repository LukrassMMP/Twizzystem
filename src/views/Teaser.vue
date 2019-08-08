<template>
  <div>
      <div id="header" style="width: 75vw;">
        <h1 class="title">Danke fürs mitmachen!</h1>
        <h2 class="title">See you next time!</h2>
      </div>
      <div id="sidebar">
        <!-- hidden button to center buttons -->
        <button  class="categorie btn hidden diabled"></button>


        <a href="https://www.instagram.com/twizzy_show/">
        <button  id="categorie1"
                    class ="categorie btn">
                    Instagram
            </button>
          </a>

          <a href="https://www.facebook.com/twizzyquiz/">
          <button id="categorie2"
                      class ="categorie btn">
                    Facebook

          </button>
          </a>
      </div>





      <div id="sidebar">


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
