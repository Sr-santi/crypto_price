import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
//@ se refiere a la carpeta src

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'

Vue.filter('dollar', dollarFilter) //registrar un filtro
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app')
