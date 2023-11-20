import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user'



const userSlice = createSlice({
    name: 'user',
    initialState: [],
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
    return async (dispatch) => {
        const loginUser = await userService.login(credential)
        console.log(loginUser, 'loggeinuser')
        //dispatch(setUser(user));
    };
};


