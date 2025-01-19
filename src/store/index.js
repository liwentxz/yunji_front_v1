import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
import tab from './modules/tab';

const store = new vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    tab: tab
  },
})

export default store