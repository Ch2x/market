import {setStore, getStore} from '../config/mUtil'

export default {
    saveUserInfo(state, payload) {
        state.userInfo = payload,
        state.login = true
        state.avatar = payload.avatar,
        setStore('user_id', payload.user_id);
    },

    logout(state) {
        state.userInfo = {};
        state.login = false;
    },

    saveSort(state, payload) {
        state.addSort = payload.sort;
    },

    changeAvatar(state, payload) {
        console.log(payload);
        state.avatar = payload.avatar;
    }
}