import axios from "axios"
import React, { createContext, useContext, useEffect, useState } from "react";

const defaultValue = { category: {
    loader: false,
    info: [],
    error: []
} };

const CategoryContext = createContext(defaultValue);

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState({ loader: true, info: [], error: [] });

    useEffect(() => { getCategories();}, []);

    const getCategories = async () => {
        try{
            setCategory(( existing ) => ({ ...existing, loader: true }) )
            const { data } = await axios.get("/api/categories");            
            const data1 = [ ...data.categories ];
            setCategory(( existing ) => ({ ...existing, loader: false, info: data1 }) )
        }
        catch(error){
            setCategory(( existing ) => ({ ...existing, loader: false, error:error }) )
        }
    }    
        
    return <CategoryContext.Provider value={ { category: category } }>
                {children}
            </CategoryContext.Provider>
    
}

const useCategoryActions = () => useContext(CategoryContext);

export { CategoryProvider, useCategoryActions };