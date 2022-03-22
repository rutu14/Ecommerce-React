import axios from "axios"
import React, { createContext, useContext, useReducer } from "react";
import { userReducer } from "../reducers";
import { CartContext } from "./index";

const defaultValue = {
    loader: false,
    userInfo: null,
    tokenPresent: false,
    createdUser: null,
    error: false,
    errorMsg: null
};

const UserContext = createContext(defaultValue);

const UserProvider = ({ children }) => {

    const { dispatch:cartDispatch } = useContext(CartContext)

    const [ state, dispatch  ] = useReducer(userReducer, defaultValue);

    const login = async ( email,password ) => {
        try {
            dispatch({ type: "LOGIN_REQUEST" })
            const { data } = await axios.post( '/api/auth/login',{ email,password })
            dispatch({ type: "LOGIN_SUCCESS", payload: data })
            localStorage.setItem("token", data.encodedToken);
        } catch (error) {
            dispatch({ type: "LOGIN_ERROR", payload: error.response.data.errors[0] })
        }
    }
      
    const signout = () => {
        localStorage.removeItem('token')
        dispatch({ type: "LOGOUT" })
        cartDispatch({ type:"CART_ON_LOGOUT" })
    }
      
    const signup = async(firstname, lastname, email, password) => {
        try {
          dispatch({ type: "SIGNUP_REQUEST" })
          const config = { headers: { 'Content-Type': 'application/json' } }
          const { data } = await axios.post( '/api/auth/signup',{ email, password, firstname, lastname })
          dispatch({ type: "SIGNUP_SUCCESS", payload: data })
          localStorage.setItem("token", data.encodedToken);
        } catch (error) {
            dispatch({ type: "SIGNUP_ERROR", payload: error.response.data.errors[0] })
        }
    }
        
    return <UserContext.Provider value={ { state , login, signup, signout } }>
                {children}
            </UserContext.Provider>
    
}

export { UserProvider, UserContext };