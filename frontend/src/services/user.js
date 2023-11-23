import axios from 'axios'
const baseUrl = '/api/manual-register'
const loginBaseUrl = '/api/sessions'
//const getLoggedUserUrl = '/api/login-user'


const create = async (newuser) => {
    const request = await axios.post(baseUrl, newuser)
    return request.data
}
const login = async (credential) => {
    const request = await axios.post(loginBaseUrl, credential)
    return request.data
}

// const getloggedInUser = async () => {
//     const request = await axios.get(getLoggedUserUrl, {
//         withCredentials: true,

//     })
//     return request.data
// }

export default { create, login }