import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import { VueSpinners } from '@saeris/vue-spinners'
import Chartkick from 'vue-chartkick'
import { Chart } from 'chart.js'

//@ se refiere a la carpeta src

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'

/* Vue.use(Chartick.use(Chart)) */
Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))
Vue.filter('dollar', dollarFilter) //registrar un filtro
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app')
