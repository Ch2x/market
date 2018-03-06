import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import ShopDetail from '@/pages/shopDetail/ShopDetail'
import Mine from '@/pages/mine/Mine'
import UserInfo from '@/pages/mine/UserInfo'
import Sort from '@/pages/sort/Sort'
import Message from '@/pages/message/Message'
import Release from '@/pages/release/Release'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/search',
      name: Search,
      component: Search,
    },
    {
      path: '/shopDetail',
      name: ShopDetail,
      component: ShopDetail,
    },
    {
      path: '/mine',
      name: Mine,
      component: Mine,
    },
    {
      path: '/userInfo',
      name: UserInfo,
      component: UserInfo,
    },
    {
      path: '/sort',
      name: Sort,
      component: Sort,
    },
    {
      path: '/message',
      name: Message,
      component: Message,
    },
    {
      path: '/release',
      name: Release,
      component: Release,
    },
    {
      path: '/login',
      name: Login,
      component: Login,
    },
  ]
})
