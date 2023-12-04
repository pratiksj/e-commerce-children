import axios from 'axios'
const baseUrl = '/api/manual-register'
const loginBaseUrl = '/api/sessions'
const getLoggedUserUrl = '/api/login-user'


const create = async (newuser) => {
    const request = await axios.post(baseUrl, newuser)
    return request.data
}
const login = async (credential) => {
    const request = await axios.post(loginBaseUrl, credential)

    // const getLoggedInUser = await axios.get(getLoggedUserUrl, null, {
    //     withCredentials: true,
    // })
    // const response = {
    //     user: request.data,
    //     currentUser: getLoggedInUser.data
    // }
    return request.data

}


const getloggedInUser = async () => {
    const request = await axios.get(getLoggedUserUrl, null, {
        withCredentials: true,

    })
    return request.data
}

export default { create, login, getloggedInUser }