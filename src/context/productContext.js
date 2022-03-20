import axios from "axios"
import React, { createContext, useContext, useEffect, useState } from "react";

const defaultValue = { category: {
    loader: false,
    products: [],
    error: []
} };

const ProductContext = createContext(defaultValue);

const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState({ loader: true, products: [], error: [] });

    useEffect(() => { getProduct();}, []);

    const getProduct = async () => {
        try{
            setProduct(( existing ) => ({ ...existing, loader: true }) )
            const { data } = await axios.get("/api/products");            
            const data1 = [ ...data.products ];
            setProduct(( existing ) => ({ ...existing, loader: false, products: data1 }) )
        }
        catch(error){
            setProduct(( existing ) => ({ ...existing, loader: false, error:error }) )
        }
    }    
        
    return <ProductContext.Provider value={ { product } }>
                {children}
            </ProductContext.Provider>
    
}

const useProductData = () => useContext(ProductContext);

export { ProductProvider, useProductData, ProductContext };