import axios from "axios"
import React, { createContext, useContext, useReducer } from "react";
import { addressReducer } from "../reducers";

const defaultValue = {
    loader: false,
    addressInfo: [],
    error: false,
    errorMsg: null
};

const AddressContext = createContext(defaultValue);

const AddressProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(addressReducer, defaultValue);

    const getAddress = async ( ) => {
        try {
            dispatch({ type: "ADDRESS_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.get( '/api/user/address', config );
            dispatch({ type: "ADDRESS_SUCCESS", payload: data.address })          
        } catch (error) {
            dispatch({ type: "ADDRESS_ERROR", payload: error.response.data })
        }
    }

    const addAddress = async ( addressDetails ) => {
        try {
            dispatch({ type: "ADDRESS_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.post( '/api/user/address',{ address: addressDetails }, config );
            dispatch({ type: "ADDRESS_SUCCESS", payload: data.address })                       
        } catch (error) {
            dispatch({ type: "ADDRESS_ERROR", payload: error.response.data.errors[0] })
        }
    }

    const deleteAddress = async ( addressId ) => {
        try {
            dispatch({ type: "ADDRESS_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.delete( `/api/user/address/${addressId}`, config );
            dispatch({ type: "ADDRESS_SUCCESS", payload: data.address })          
        } catch (error) {
            dispatch({ type: "ADDRESS_ERROR", payload: error.response.data.errors[0] })
        }
    }

    const updateAddress = async ( addressId, updatedAddress ) => {
        try {
            dispatch({ type: "ADDRESS_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.post( `/api/user/address/${addressId}`,{updatedAddress}, config );
            dispatch({ type: "ADDRESS_SUCCESS", payload: data.address })          
        } catch (error) {
            dispatch({ type: "ADDRESS_ERROR", payload: error.response.data.errors[0] })
        }
    }

    return <AddressContext.Provider value={ { state, getAddress , addAddress, deleteAddress, updateAddress } }>
                {children}
            </AddressContext.Provider>
    
}

const useAddressActions = () => useContext(AddressContext);

export { AddressProvider, useAddressActions };