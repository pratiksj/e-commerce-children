import axios from 'axios'
const baseUrl = '/api/manual-register'

const create = async (newuser) => {
    const request = await axios.post(baseUrl, newuser)
    return request.data
}

export default { create }