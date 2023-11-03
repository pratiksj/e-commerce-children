/* eslint-disable react/prop-types */
import { createContext } from "react";
import all_Product from "../Components/assets/all_products";



 export const ShopContext = createContext(null)

export const ShopContextProvider =(props)=>{
const contextValue ={all_Product}

return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
}

