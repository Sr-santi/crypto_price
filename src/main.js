import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
//@ se refiere a la carpeta src

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
