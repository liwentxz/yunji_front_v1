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
    component: login,
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/error/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error/401"),
    hidden: true,
  },
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/portal/index"),
        name: "Portal",
        meta: { title: "首页", icon: "portal", requiresAuth: true },
      },
      {
        path: "steel",
        name: "Steel",
        component: () => import("@/views/front/materials/steel/index"),
        meta: { title: "钢材", icon: "steel" },
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
