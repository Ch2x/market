import {setStore, getStore} from '../config/mUtil'

export default {
    saveUserInfo(state, payload) {
        state.userInfo = payload,
        state.login = true
        setStore('user_id', payload.user_id);
    },

    logout(state) {
        state.userInfo = {};
        state.login = false;
    },

    saveSort(state, payload) {
        state.addSort = payload.sort;
    }
}