import React from 'react'
import all_Product from "../Assets/Assets/all_product"

export const ShopContext = createContext(null);

const shopContextProvider = (props) =>{
    const contextValue = {all_Product}
    return (
        <ShopContext.Provider value={contextValue}>
            
        </ShopContext.Provider>
    )
}