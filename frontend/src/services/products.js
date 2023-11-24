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

export default { getAll, addProductToCart }