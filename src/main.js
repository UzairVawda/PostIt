import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style.scss";
import { fireAuth } from "@/db/firebase";

import jQuery from "jquery";
import "popper.js";
import "bootstrap";
window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

let app;
fireAuth.onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
