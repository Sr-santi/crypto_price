import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Error from '@/views/Error'
import About from '@/views/About'
import CoinDetail from '@/views/CoinDetail'

Vue.use(VueRouter) //setea como un plugin

export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/about',
      name: 'about',
      component: About,
    },

    {
      path: '/coin/:id',
      name: 'coin-detail',
      component: CoinDetail,
    },

    {
      path: '*',
      name: 'error',
      component: Error,
    },
  ],
})
