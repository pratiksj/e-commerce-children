import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/productReducer'

const store = configureStore({
    reducer: {
        products: reducer
    }

})

export default store