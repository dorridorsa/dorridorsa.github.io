import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Klicka här'
  },
  mutations: {
    button(state) {
      state.message ='Laddar ...'
    }
  },
  actions: {
  },
  modules: {
  }
})
