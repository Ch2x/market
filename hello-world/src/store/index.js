import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    userInfo: null, //用户信息
    login: false, //是否登录
    addSort: null, //添加分类
    avatar: null,
    address: null,
    newAddress: false,
    orderInfo: null,
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})