import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import ShopDetail from '@/pages/shopDetail/ShopDetail'
import Mine from '@/pages/mine/Mine'
import MyPosted from '@/pages/mine/MyPosted'
import UserInfo from '@/pages/mine/UserInfo'
import Sort from '@/pages/sort/Sort'
import SortList from '@/pages/sort/SortList'
import Message from '@/pages/message/Message'
import Release from '@/pages/release/Release'
import Login from '@/pages/login/Login'
import Enroll from '@/pages/login/Enroll'
import EditPass from '@/pages/login/EditPass'
import ReleaseSort from '@/pages/release/ReleaseSort'
import ShopCart from '@/pages/shopCart/ShopCart'
import Address from '@/pages/mine/MyAddress'
import AddAddress from '@/pages/mine/AddAddress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
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
          path: '/sortList',
          name: SortList,
          component: SortList,
        },
        {
          path: '/message',
          name: Message,
          component: Message,
        },
        {
          path: '/release',
          component: Release,
          children: [
            {
              path: '/releaseSort',
              component: ReleaseSort,
            },
          ]
        },
        {
          path: '/login',
          name: Login,
          component: Login,
        },
        {
          path: '/enroll',
          name: Enroll,
          component: Enroll,
        },
        {
          path: '/editPass',
          name: EditPass,
          component: EditPass,
        },
        {
          path: '/myPosted',
          name: MyPosted,
          component: MyPosted,
        },
        {
          path: '/shopCart',
          name: ShopCart,
          component: ShopCart,
        },
        {
          path: '/address',
          name: Address,
          component: Address,
        },
        {
          path: '/addAddress',
          name: AddAddress,
          component: AddAddress,
        }
        
      ]
    }

    // {
    //   path: '/releaseSort',
    //   name: ReleaseSort,
    //   component: ReleaseSort,
    // },
  ]
})
