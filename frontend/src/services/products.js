import axios from "axios";
const baseUrl = '/api/products'
//const cartUrl = '/api/products/cart'

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

const addProductToCart = async (productId) => {

    const request = await axios.post(`${baseUrl}/cart/${productId}`, null, {
        withCredentials: true,
    })
    return request.data
}

const getCart = async () => {
    const request = await axios.get(`${baseUrl}/cart`)
    return request.data
}

const remove = async (id) => {

    const request = await axios.delete(`${baseUrl}/cart/${id}`, {
        withCredentials: true,
    })
    return request.data
}

const reform = async (id, object) => {
    const request = await axios.put(`${baseUrl}/cart/${id}`, object, {
        withCredentials: true,
    })
    return request.data
}

export default { getAll, addProductToCart, getCart, remove, reform }