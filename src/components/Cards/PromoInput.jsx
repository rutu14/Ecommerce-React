import { useEffect, useState } from "react";
import { validPromoCode } from "../../util/data";

const PromoInput = ({ disabledPointer, setDisabledPointer, otherPrices, setOtherPrices, setViewInput }) => {
    const [ promoInput, setPromoInput ] = useState('');
    const [ promoHelper, setPromoHelper ] = useState('');
    const [disabledInput, setDisabledInput] = useState(false);
    
    const closeInput = () => { setPromoHelper(''); setViewInput(false); }

    const checkPromoCode = () => {
        const verify = validPromoCode.find((codes) => promoInput === codes.couponName);
        if(verify !== undefined) {
            setOtherPrices({ ...otherPrices, coupon: verify.price })
            setPromoHelper("Verified") 
        }else{ setPromoHelper("NotVerified") }
    }
    useEffect( () => {
        if( otherPrices.coupon !== 0 || promoHelper === "Verified" ){
            setDisabledInput(true);
            setDisabledPointer('cna')
        }
    },[ otherPrices.coupon, promoHelper ])
    

    const PromoHelper = () => {
        if ( promoHelper === "Verified" ){
            return( <div className="text4 regular text-center verified"> 
                        PromoCode Verified  
                        <i className="bi bi-check2-circle verified"></i>
                    </div> );
        }
        if ( promoHelper === "NotVerified" ){
            return( <div className="text4 regular text-center notverified"> 
                        PromoCode Not Verified 
                        <i className="bi bi-x-circle notverified"></i>
                    </div> );
        }
        return( <></> )
    }

    return(
        <section className="promocode-content m-t5">
            <button className="icon-button promocode-cross" onClick={closeInput}><i className="bi bi-x"></i></button>  
            <div className="input-grp promocode-inp-grp">
                <input placeholder="Coupon Code" type="text" disabled={disabledInput} className={`input-grp-right text-input input-width inp-border promocode-inp ${disabledPointer}`} value={promoInput} onChange={(e)=>setPromoInput(e.target.value)} />
                <button className="icon-button input-grp-btn btn-right inp-border promocode-btn" onClick={checkPromoCode}><i className="bi bi-search"></i></button>
            </div> 
            <PromoHelper/>                  
        </section>
    );
}

export { PromoInput }