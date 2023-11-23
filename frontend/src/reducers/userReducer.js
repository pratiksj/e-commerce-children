import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user'



const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        appendUser(state, action) {
            state.push(action.payload)
        },
        setUser(state, action) {
            return action.payload
        }

    }
})


export const { appendUser, setUser } = userSlice.actions
export default userSlice.reducer

export const creatUser = (user) => {

    return async () => {
        const newUser = await userService.create(user)
        console.log(newUser, 'from database')
    }
}

export const loginUser = (credential) => {
    return async () => {
        await userService.login(credential)

    };
};

export const currentUser = () => {
    return async (dispatch) => {
        console.log('hellow')
        const loginUser = await userService.getloggedInUser()
        console.log(loginUser, 'currentUser')
        dispatch(setUser(loginUser));
    }
}



