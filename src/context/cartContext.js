import axios from "axios"
import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const defaultValue = {
    loader: false,
    cartInfo: [],
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
        } catch (error) {
            dispatch({ type: "CART_ERROR", payload: error.response.data })
        }
    }

    const addCart = async ( product ) => {
        try {
            dispatch({ type: "CART_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            if( state.cartInfo.length === 0 ){
                const { data } = await axios.post( '/api/user/cart',{ product }, config );
                dispatch({ type: "CART_SUCCESS", payload: data.cart })     
            }else{
                const matchFound = state.cartInfo.findIndex((prod) => prod._id === product._id);
                if( matchFound === -1 ) {
                    const { data } = await axios.post( '/api/user/cart',{ product }, config );
                    dispatch({ type: "CART_SUCCESS", payload: data.cart }) 
                }else{                    
                    dispatch({ type: "CART_SUCCESS_MATCH" })                    
                }                 
            }                  
        } catch (error) {
            dispatch({ type: "CART_ERROR", payload: error.response.data.errors[0] })
        }
    }

    const deleteCart = async ( productId ) => {
        try {
            dispatch({ type: "CART_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.delete( `/api/user/cart/${productId}`, config );
            dispatch({ type: "CART_SUCCESS", payload: data.cart })          
        } catch (error) {
            dispatch({ type: "CART_ERROR", payload: error.response.data.errors[0] })
        }
    }

    const addQty = async ( productId ) => {
        try {
            dispatch({ type: "CART_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.post( `/api/user/cart/${productId}`,{action:{ type: "increment" }}, config );
            dispatch({ type: "CART_SUCCESS", payload: data.cart })          
        } catch (error) {
            dispatch({ type: "CART_ERROR", payload: error.response.data.errors[0] })
        }
    }

    const subQty = async ( productId ) => {
        try {
            dispatch({ type: "CART_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.post( `/api/user/cart/${productId}`,{action:{ type: "decrement" }}, config );
            dispatch({ type: "CART_SUCCESS", payload: data.cart })          
        } catch (error) {
            dispatch({ type: "CART_ERROR", payload: error.response.data.errors[0] })
        }
    }

    const cartQty = state.cartInfo.reduce(( accumulator, cartProduct ) => ({
        ...accumulator,
        quantity: accumulator.quantity + cartProduct.qty 
    }), { quantity: 0 })

    const matchUndo = () => dispatch({ type: "CART_SUCCESS_MATCH_UNDO" })

    return <CartContext.Provider value={ { state, matchUndo, cartQty, getCart , addCart, deleteCart, addQty, subQty } }>
                {children}
            </CartContext.Provider>
    
}

const useCartActions = () => useContext(CartContext);

export { CartProvider, useCartActions };