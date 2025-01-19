import 'vant/lib/index.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import http from "@/request/http";
import RelationGraph from 'relation-graph';
import store from "./store";
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

Vue.use(ElementUI)
Vue.component('splitpanes', Splitpanes)
Vue.component('pane', Pane)

let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/chart/bar");
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");

Vue.prototype.$echarts = echarts;

//全局定义axios
// axios.defaults.headers.common['tenant'] = `yjkj`;
// axios.defaults.headers.common['yjkj-auth'] = sessionStorage.getItem("yjkj-auth") || localStorage.getItem("yjkj-auth") || '';
// const host = window.location.protocol+"//"+ window.location.host;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8090/platform';
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
