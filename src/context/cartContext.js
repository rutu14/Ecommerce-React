import axios from "axios"
import React, { createContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const defaultValue = {
    loader: false,
    cartInfo: [ ],
    productAdded: false,
    error: false,
    errorMsg: null
};

const CartContext = createContext(defaultValue);

const CartProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(cartReducer, defaultValue);

    const getCart = async ( ) => {
        try {
            dispatch({ type: "CART_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.get( '/api/user/cart', config );
            dispatch({ type: "CART_SUCCESS", payload: data.cart })          
        } catch (error ) {
            console.log(error.response )
            dispatch({ type: "CART_ERROR", payload: error })
        }
    }

    const addCart = async ( product ) => {
        try {
            dispatch({ type: "CART_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            if( state.cartInfo.length === 0 ){
                const { data } = await axios.post( '/api/user/cart',{ product }, config );
                console.log(data)
                dispatch({ type: "CART_SUCCESS", payload: data.cart })     
            }else{
                const matchFound = state.cartInfo.findIndex((prod) => prod._id === product._id);
                if( matchFound === -1 ) {
                    const { data } = await axios.post( '/api/user/cart',{ product }, config );
                    console.log("No match",data)
                    dispatch({ type: "CART_SUCCESS", payload: data.cart }) 
                }else{                    
                    dispatch({ type: "CART_SUCCESS_MATCH" })                    
                }                 
            }                  
        } catch (error) {
            console.log(error)
            dispatch({ type: "CART_ERROR", payload: error })
        }
    }

    const deleteCart = async ( productId ) => {
        try {
            dispatch({ type: "CART_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.delete( `/api/user/cart/${productId}`, config );
            console.log(data)
            dispatch({ type: "CART_SUCCESS", payload: data.cart })          
        } catch (error ) {
            console.log(error.response )
            dispatch({ type: "CART_ERROR", payload: error })
        }
    }

    const addQty = async ( productId ) => {
        try {
            dispatch({ type: "CART_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.post( `/api/user/cart/${productId}`,{action:{ type: "increment" }}, config );
            console.log(data)
            dispatch({ type: "CART_SUCCESS", payload: data.cart })          
        } catch (error ) {
            console.log(error.response )
            dispatch({ type: "CART_ERROR", payload: error })
        }
    }

    const subQty = async ( productId ) => {
        try {
            dispatch({ type: "CART_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.post( `/api/user/cart/${productId}`,{action:{ type: "decrement" }}, config );
            console.log(data)
            dispatch({ type: "CART_SUCCESS", payload: data.cart })          
        } catch (error ) {
            console.log(error.response )
            dispatch({ type: "CART_ERROR", payload: error })
        }
    }
        
    return <CartContext.Provider value={ { state , dispatch, getCart , addCart, deleteCart, addQty, subQty } }>
                {children}
            </CartContext.Provider>
    
}

export { CartProvider, CartContext };