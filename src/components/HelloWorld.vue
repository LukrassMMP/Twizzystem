<template>
  <div>
     <div
                 id="question"
                 v-bind:class="{'hidden':$store.state.hidden}"
                 >
           {{$store.state.hidden}}
        </div>

      <button class ="answer answer1"
                v-bind:class="{'hidden':$store.state.hidden}"
                >
            Answer1</button>
        <button class ="answer answer2"
                v-bind:class="{'hidden':$store.state.hidden}"
                >
            Answer2</button>
        <button class ="answer answer3"
                v-bind:class="{'hidden':$store.state.hidden}"
                >
            Answer4</button>
        <button class ="answer answer4"
                v-bind:class="{'hidden':$store.state.hidden}"
                >
            Answer5</button>

    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    time: {default: 30}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
