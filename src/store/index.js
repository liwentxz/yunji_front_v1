import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import menus from "./modules/menus";
import tags from "./modules/tags";
import tabs from "./modules/tabs";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    menus,
    tags,
    tabs,
  },
  getters,
});

export default store;
