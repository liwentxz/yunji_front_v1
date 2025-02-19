import Vue from "vue";
import Router from "vue-router";
import login from "../views/login/index.vue";

import Layout from "@/layout";

Vue.use(Router);

export const constantRoutes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout,
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/materials/steel",
        name: "steel",
        component: () => import("@/views/front/materials/steel/index.vue"),
        // meta: {
        //   requireAuth: true,
        // },
      },
    ],
  },
];

// 防止连续点击多次路由报错
let routerPush = Router.prototype.push;
let routerReplace = Router.prototype.replace;
// push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};
// replace
Router.prototype.replace = function push(location) {
  return routerReplace.call(this, location).catch((err) => err);
};

export default new Router({
  mode: "history", // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});
