import axios from 'axios'
const baseUrl = '/api/manual-register'
const loginBaseUrl = '/api/session'

const create = async (newuser) => {
    const request = await axios.post(baseUrl, newuser)
    return request.data
}
const login = async (credential) => {
    const request = await axios.post(loginBaseUrl, credential)
    return request.data
}

export default { create, login }