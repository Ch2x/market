import fetch from '../config/fetch'

// 用户登录
export const userLogin = (userName, password) => fetch('/user/login', {
    userName, 
    password
}, 'POST');

export const userLogout = () => fetch('/user/logout', {}, 'GET');

export const releaseProduct = (user_id, images, sort, description, title, price) => fetch('/product/release', {
    user_id,
    images,
    sort,
    description,
    title,
    price,
}, 'POST');

export const getProductLists = (sort) => {
    if(sort) {
        return fetch('/product/getAllProducts', { sort }, 'GET');
    } else {
        return  fetch('/product/getAllProducts', {}, 'GET');
    }
}

export const getProductDetail = (id) => fetch('/product/getDetail', { product_id: id }, 'GET');