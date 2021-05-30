import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
//@ se refiere a la carpeta src

import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app')
