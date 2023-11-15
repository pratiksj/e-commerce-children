import { createSlice } from '@reduxjs/toolkit'
import productService from '../services/products'



const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        appendProduct(state, action) {
            state.push(action.payload)
        },
        setProduct(state, action) {
            return action.payload
        }

    }
})

export const { appendProduct, setProduct } = productSlice.actions
export default productSlice.reducer

export const getProduct = () => {
    return async dispatch => {
        const product = await productService.getAll()

        dispatch(setProduct(product))
    }
}
