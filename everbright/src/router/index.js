import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Vip from '@/components/Vip/Vip'
import List from '@/components/List/List'
import Shop from '@/components/Shop/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home' 
    },
    {
      path: '/home',
      name: 'home',
      component:Home
    },
    {
      path: '/vip',
      name: 'vip',
      component:Vip
    },
    {
      path: '/list',
      name: 'list',
      component:List
    },
    {
      path: '/shop',
      name: 'shop',
      component:Shop
    }
  ]
})
