import {
    setStore
} from '../config/mUtil'

export default {
    saveUserInfo(state, payload) {
        state.userInfo = payload,
            state.login = true
        state.avatar = payload.avatar,
            setStore('user_id', payload.user_id);
    },

    logout(state) {
        state.userInfo = null;
        state.login = false;
    },

    saveSort(state, payload) {
        state.addSort = payload;
    },

    changeAvatar(state, payload) {
        console.log(payload);
        state.avatar = payload.avatar;
    },

    chooseAddress(state, payload) {
        state.address = payload.address;
    },

    confirmAddress(state, payload) {
        state.newAddress = payload.newAddress;
    },

    saveOrderInfo(state, payload) {
        state.orderInfo = payload;
    }
}