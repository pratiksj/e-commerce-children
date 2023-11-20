import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/productReducer'
import userReducer from './reducers/userReducer'

const store = configureStore({
    reducer: {
        products: reducer,
        user: userReducer
    }

})

export default store