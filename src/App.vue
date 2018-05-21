<template>
  <div id="app">
    <is-img class="margin" :url="require('./assets/bg.png')" transition="press" :size="1.1" :blur="2" :tranBlur="5" :tranSize="1.5" :time="0.1" :opacity="0.2" :tranOpacity="1" :animate="false" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.margin {
  margin: 200px;
  width: 200px;
  height: 100px;
}

h1, h2 {
  font-weight: normal;
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
