import fetch from '../config/fetch'

// 用户登录
export const userLogin = (userName, password) => fetch('/user/login', {
    userName, 
    password
}, 'POST');

export const userLogout = () => fetch('/user/logout', {}, 'GET');