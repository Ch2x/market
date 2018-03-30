import fetch from '../config/fetch'

// 用户登录
export const userLogin = (userName, password) => fetch('/user/login', {
    userName, 
    password
}, 'POST');

export const userEnroll = (userName, password, confirmPassword) => fetch('/user/registered', {
    userName,
    password,
    confirmPassword,
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

export const searchProduct = (payload) => fetch('/product/searchProduct', {...payload}, "GET");

export const getProductUserLists = (payload) => fetch('/product/getProducts', {...payload}, 'GET');

export const delProduct = (user_id, product_id) => fetch(`/product/delProduct/${user_id}/${product_id}`, {}, "DELETE")

export const updateProduct = (product_id, images, sort, description, title, price) => fetch(`/product/updateProduct/${product_id}`, {
    images,
    sort,
    description,
    title,
    price,
}, 'POST');

export const postComment = (product_id, content, from_uid, to_uid) => fetch('/comment/postComment', {
    product_id, 
    content, 
    from_uid, 
    to_uid
}, 'POST');

export const getMyMessage = (payload) => fetch('/comment/getMyMessage', {...payload}, "GET");

export const addCart = (payload) => fetch('/cart/addCart', {...payload}, "POST"); 

export const getAddState = (user_id, product_id) => fetch(`/cart/getAddState/${user_id}/${product_id}`, {}, "GET");

export const getMyCart = (payload) => fetch('/cart/getMyCart', {...payload}, 'GET');

export const delShopCart = (user_id, products) => fetch(`/cart/delShopCart/${user_id}/${products}`, {}, "DELETE");

export const postAddress = (payload) => fetch('/address/postAddress', {...payload}, 'POST');

export const getMyAddress = (payload) => fetch('/address/getMyAddress', {...payload}, 'GET');

export const delAddress = (user_id, address_id) => fetch(`/address/delAddress/${user_id}/${address_id}`, {}, "DELETE");

export const getOrderInfo = (payload) => fetch('/product/getOrderInfo', {...payload}, 'GET');

export const confirmOrder = (payload) => fetch('/product/confirmOrder', {...payload}, "POST");