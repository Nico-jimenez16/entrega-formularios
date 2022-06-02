import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabla: []
  },
  getters: {
    getTabla(state){
      return state.tabla
    }
  },
  mutations: {
    agregarTabla(state , obj){
      state.tabla.push(obj)
    } 
  },
  actions: {
  },
  modules: {
  }
})
