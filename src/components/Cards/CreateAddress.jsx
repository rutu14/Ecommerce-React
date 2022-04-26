import { useState } from "react";
import { toast } from "react-toastify";
import { useAddressActions } from "../../context";
import { stateNames } from "../../util/data";
import { DotsLoader } from "../Loader/Loader";

const CreateAddress = ({close}) => {
    const [ addressDetails, setAddressDetails ] = useState({nickName:'',addLine1:'',addLine2:'',addLine3:'', city:'',state:'',country:'India', pincode:''});
    const { state, addAddress } = useAddressActions();
    const { loader, addressInfo } = state;

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
        }else if( addressInfo.find( adddressList => adddressList.addressDetails.nickName.toUpperCase() === addressDetails.nickName.toUpperCase() )){
            toast.warning("Nickname is used. Please try other name.");
        }else{
            addAddress({ addressDetails });
            setAddressDetails({nickName:'',addLine1:'',addLine2:'',addLine3:'', city:'',state:'', pincode:''});
            close();
        }
    }

    return(
    <section className="m-t20">
            <form className="address-form" >
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
                : <button className="btn btn-primary outline text-uppercase hero-btn product-btn user-btn add-btn cp" onClick={onSubmit} type="button">Create</button>  
                }
                <button className="btn btn-primary outline text-uppercase hero-btn product-btn user-btn add-btn cp" onClick={close} type="button">Cancel</button>
                </section>
            </form>  
    </section>
    )
}

export { CreateAddress }