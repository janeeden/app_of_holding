import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: 'user',
    accessToken: null
  },
  mutations: {
    setAdmin (state) {
      state.role = 'admin'
    },
  },
  modules: {

  }
})

