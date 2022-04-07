import axios from "axios"
import React, { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers";

const defaultValue = {
    loader: false,
    wishlistInfo: [ ],
    productAdded: false,
    error: false,
    errorMsg: null
};

const WishlistContext = createContext(defaultValue);

const WishlistProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(wishlistReducer, defaultValue);

    const getWishlist = async ( ) => {
        try {
            dispatch({ type: "WISHLIST_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.get( '/api/user/wishlist', config );
            dispatch({ type: "WISHLIST_SUCCESS", payload: data.wishlist })          
        } catch (error) {
            dispatch({ type: "WISHLIST_ERROR", payload: error })
        }
    }

    const addWishlist = async ( product ) => {
        try {
            dispatch({ type: "WISHLIST_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            if( state.wishlistInfo.length === 0 ){
                const { data } = await axios.post( '/api/user/wishlist',{ product }, config );
                dispatch({ type: "WISHLIST_SUCCESS", payload: data.wishlist })     
            }else{
                const matchFound = state.wishlistInfo.findIndex((prod) => prod._id === product._id);
                if( matchFound === -1 ) {
                    const { data } = await axios.post( '/api/user/wishlist',{ product }, config );
                    dispatch({ type: "WISHLIST_SUCCESS", payload: data.wishlist }) 
                }else{                    
                    dispatch({ type: "WISHLIST_SUCCESS_MATCH" })                    
                }                 
            }                  
        } catch (error) {
            dispatch({ type: "WISHLIST_ERROR", payload: error })
        }
    }

    const deleteWishlist = async ( productId ) => {
        try {
            dispatch({ type: "WISHLIST_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.delete( `/api/user/wishlist/${productId}`, config );
            dispatch({ type: "WISHLIST_SUCCESS", payload: data.wishlist })          
        } catch (error) {
            dispatch({ type: "WISHLIST_ERROR", payload: error })
        }
    }

    let wishlistQty = state.wishlistInfo.length;

    const matchWishlistUndo = () => dispatch({ type: "WISHLIST_SUCCESS_MATCH_UNDO" });
        
    return <WishlistContext.Provider value={ { state , wishlistQty, matchWishlistUndo, getWishlist , addWishlist, deleteWishlist } }>
                {children}
            </WishlistContext.Provider>
    
}

const useWishlistActions = () => useContext(WishlistContext);

export { WishlistProvider, useWishlistActions };