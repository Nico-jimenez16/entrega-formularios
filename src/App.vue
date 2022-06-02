<template>
  <div id="app">
    <Header></Header>
    <nav class="flex justify-start p-2 border-b">
      <router-link class="font-bold text-xl mr-2" to="/">Home</router-link> |
      <router-link class="font-bold text-xl ml-2" to="/tabla">Tabla</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  components:{
    Header
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
