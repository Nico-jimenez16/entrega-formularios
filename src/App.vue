<template>
  <div id="app">
    <Header></Header>
    <Tabla :user="user"></Tabla>
    <Form @agregar-a-tabla="ActualizarTabla"></Form>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import Header from './components/Header'
import Tabla from './components/Tabla.vue'

export default {
  name: 'App',
  data() {
    return {
      user: {
          headtable: ['Nombre', 'E-mail', 'Dni', 'Curso'],
          forms: [] 
      },
    }
  },
  methods:{
    ActualizarTabla(obj){
      this.user.forms.push(obj)
    }
  },
  components: {
    Header,
    Form,
    Tabla
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
</style>
