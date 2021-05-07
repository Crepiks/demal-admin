import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/views/login/demal-login";
import appLayout from "@/views/layouts/demal-app-layout";
import tours from "@/views/tours/demal-tours";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/app",
    component: appLayout,
    children: [
      {
        path: "tours",
        name: "tours",
        component: tours,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
