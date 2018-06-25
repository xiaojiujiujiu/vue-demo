import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index';
import Auction from '@/page/auction';
import Subscribe from '@/page/subscribe';
import User from '@/page/user';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/auction',
      name: 'Auction',
      component: Auction
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: Subscribe
    },{
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
