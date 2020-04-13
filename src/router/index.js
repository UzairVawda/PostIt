import Vue from "vue";
import VueRouter from "vue-router";
import { fireAuth } from "@/db/firebase";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Admin from "../views/Admin.vue";

import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Orders from "../views/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { requiresAuth: true },
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview
      },
      {
        path: "/products",
        name: "Products",
        component: Products
      },
      {
        path: "/orders",
        name: "Orders",
        component: Orders
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fireAuth.currentUser;

  if (requiresAuth && !currentUser) {
    next("/");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
