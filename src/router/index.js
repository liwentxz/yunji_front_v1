import Vue from "vue";
import Router from "vue-router";
import login from "../views/login/index.vue";

// import frontRouter from "./modules/front/index";

Vue.use(Router);

export const constantRouterMap = [
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
    path: "/portal",
    name: "portal",
    component: () => import("@/views/front/portal/index.vue"),
  },
  {
    path: "/portal",
    name: "portal",
    component: () => import("@/views/front/portal/index.vue"),
  },
  // frontRouter,
];

export const createRouter = (routes) =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes,
  });

const router = createRouter(constantRouterMap);

export function resetRouter() {
  const newRouter = createRouter(constantRouterMap);
  router.matcher = newRouter.matcher; // the relevant part
}

export default router;
