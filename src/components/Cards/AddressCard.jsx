import { useState } from "react";
import { toast } from "react-toastify";
import { useAddressActions } from "../../context";
import { capitializeString } from "../../util/capitalLetterFn";
import { stateNames } from "../../util/data";
import { DotsLoader } from "../Loader/Loader";

const AddressCard = ({ cardValue }) => {
    const { 
    addLine1,
    addLine2,
    addLine3,
    city,
    country,
    nickName,
    pincode,
    state } = cardValue.addressDetails;

    const { state:addressState, deleteAddress, updateAddress } = useAddressActions();
    const { loader, addressInfo } = addressState;

    const [ isOpen, setIsOpen ] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const [ isOpen1, setIsOpen1 ] = useState(false);
    const open1 = () => setIsOpen1(!isOpen1);

    const removeAddress = () => deleteAddress(cardValue._id);

    const line1 = capitializeString(addLine1);
    const line2 = addLine2 ? capitializeString(addLine2) : false ;
    const line3 = addLine3 ? capitializeString(addLine3) : false;
    const cityname = capitializeString(city);
    const addressName = capitializeString(nickName);

    const MenuOptions = () => {
        return(
            <section className="actions-dropdown">
                <a className="btn-link cp td text-center dropdown-links" role="button" onClick={open}>
                    Edit
                </a>
                <a className="btn-link cp td text-center dropdown-links" role="button" onClick={removeAddress}>
                    Remove
                </a>
            </section>
        )
    }

    const EditForm = () => {
        const [ addressDetails, setAddressDetails ] = useState({nickName,addLine1,addLine2,addLine3, city,state,country, pincode});

        const handleChange = e => {
            const { name, value } = e.target;
            setAddressDetails(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
    
        const onSubmit = () =>{
            if( addressDetails.nickName === '' || addressDetails.addLine1 === '' || addressDetails.city === '' || addressDetails.state === '' || addressDetails.pincode === '' ){
                toast.warning("Details is mandatory!");
            }else if( addressInfo.find( adddressList => adddressList.addressDetails.nickName.toLowerCase() === addressDetails.nickName.toLowerCase() )){
                toast.warning("Nickname is used. Please try other name.")
            }else{
                updateAddress(cardValue._id, addressDetails);
                close();
                open1();
            }
        }

        const onCancel = () => { close(); open1(); }

        return(
        <div class="modal-backdrop">
            <section className="modal-form">
                <form className="modal-dialog address-form form-modal" >
                    <section className="address-section1">
                            <label htmlFor="nickName-input" className="text4 medium font-color">Nick Name<span className="required-mark">*</span></label>
                            <input id="nickName-input" className="text-input login-input address-input" value={addressDetails.nickName} name='nickName' type="text" onChange={handleChange}/>
                
                            <label htmlFor="addline1-input" className="text4 medium font-color">Address Line 1<span className="required-mark">*</span></label>
                            <input id="addline1-input" className="text-input login-input address-input" value={addressDetails.addLine1} name='addLine1' type="text" onChange={handleChange}/>    
        
                            <label htmlFor="addline2-input" className="text4 medium font-color">Address Line 2</label>
                            <input id="addline2-input" className="text-input login-input address-input" value={addressDetails.addLine2} name='addLine2' type="text" onChange={handleChange}/>                
        
                            <label htmlFor="addline3-input" className="text4 medium font-color">Address Line 3</label>
                            <input id="addline3-input" className="text-input login-input address-input" value={addressDetails.addLine3} name='addLine3' type="text" onChange={handleChange}/>                
                        </section>
                        <section className="address-section2">
                            <label htmlFor="city-input" className="text4 medium font-color">City<span className="required-mark">*</span></label>
                            <input id="city-input" className="text-input login-input address-input" value={addressDetails.city} name='city' type="text" onChange={handleChange}/>                
        
                            <label htmlFor="state-input" className="text4 medium font-color">State<span className="required-mark">*</span></label>
                            <select id="state-input" className="text-input login-input address-input cp" value={addressDetails.state} name='state' type="text" onChange={handleChange} >
                                <option className="option-box">Select State</option>
                                {stateNames.map((state) =>(<option key={state.shortName} value={state.stateName} className="option-box">{state.stateName}</option>))}
                            </select>
        
                            <label htmlFor="country-input" className="text4 medium font-color">Country<span className="required-mark">*</span></label>
                            <input id="country-input" className="text-input login-input address-input" disabled value={addressDetails.country} name='country' type="text" readOnly/>                
        
                            <label htmlFor="pincode-input" className="text4 medium font-color">Pincode<span className="required-mark">*</span></label>
                            <input id="pincode-input" className="text-input login-input address-input" value={addressDetails.pincode} name='pincode' type="text" onChange={handleChange}/>                
                        </section>
                        <section className="btns-section">
                        { loader 
                        ?  <span className='button-loader'><DotsLoader/></span>
                        : <button className="btn btn-primary outline text-uppercase hero-btn product-btn user-btn add-btn cp" onClick={onSubmit} type="button">Update</button>  
                        }
                        <button className="btn btn-primary outline text-uppercase hero-btn product-btn user-btn add-btn cp" onClick={onCancel} type="button">Cancel</button>
                        </section>
                    </form>  
            </section>
        </div>     
            )
    }

    return(
        <>
        <article className="card card-box-shadow address-card">
            <button className="menu-btn cp" onClick={open1}></button>
            {isOpen1 && <MenuOptions/>}
            <h2 className="medium text-center nick-name">{addressName}</h2>
            <h3 className="text4 regular address-card-text">Address Line1: {line1}</h3>
            {line2 ? <h3 className="text4 regular address-card-text">Address Line2: {line2}</h3> : <div className="no-value"></div>}
            {line3 ? <h3 className="text4 regular address-card-text">Address Line3: {line3}</h3> : <div className="no-value"></div>}
            <h3 className="text4 regular address-card-text">City: {cityname}</h3>
            <h3 className="text4 regular address-card-text">State: {state}</h3>
            <h3 className="text4 regular address-card-text">Country: {country}</h3>
            <h3 className="text4 regular address-card-text">Pincode: {pincode}</h3>
        </article>
        {isOpen && <EditForm/>}
        </>
    );
}

export { AddressCard }
