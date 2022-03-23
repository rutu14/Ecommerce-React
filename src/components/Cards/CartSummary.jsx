import { useEffect, useState } from "react"
import { deliveryCost, taxPercent, validPromoCode } from "../../data"

const CartSummary = ( subTotal ) => {
    
    const [ otherPrices, setOtherPrices ] = useState({ delivery: 0, coupon: 0, tax: 0, total: 0 });

    useEffect( () => {
        setOtherPrices( { ...otherPrices, delivery: deliveryCost, tax: (( taxPercent / 100 ) * subTotal.subTotal), total: ( subTotal.subTotal + otherPrices.tax - otherPrices.coupon + otherPrices.delivery) });
    },[subTotal, otherPrices.coupon])
    
    const [ promoHelper, setPromoHelper ] = useState('');
    const [ viewInput, setViewInput ] = useState(false);
    const openInput = () => setViewInput(true);
    const closeInput = () => setViewInput(false);

    const subTotalPrice = subTotal.subTotal.toLocaleString('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 })
    const couponPrice = otherPrices.coupon.toLocaleString('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 })
    const deliveryPrice = otherPrices.delivery.toLocaleString('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 })
    const taxPrice = otherPrices.tax.toLocaleString('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 })
    const totalPrice = otherPrices.total.toLocaleString('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 })

    const PromoInput = () => {
        const [ promoInput, setPromoInput ] = useState('')
        const checkPromoCode = () => {
            const verify = validPromoCode.find((codes) => promoInput === codes.couponName);
            if(verify !== undefined) {
                setOtherPrices({ ...otherPrices, coupon: verify.price })
                setPromoHelper("Verified") 
            }else{ setPromoHelper("NotVerified") }
        }

        const PromoHelper = () => {
            if ( promoHelper === "Verified" ){
                return( <div className="text4 regular text-center verified"> 
                            PromoCode Verified  
                            <i class="bi bi-check2-circle verified"></i>
                        </div> );
            }
            if ( promoHelper === "NotVerified" ){
                return( <div className="text4 regular text-center notverified"> 
                            PromoCode Not Verified 
                            <i class="bi bi-x-circle notverified"></i>
                        </div> );
            }
            return( <></> )
        }
        return(
            <section class="promocode-content m-t5">
                <button class="icon-button promocode-cross" onClick={closeInput}><i class="bi bi-x"></i></button>  
                <div class="input-grp promocode-inp-grp">
                    <input type="text" class="input-grp-right text-input input-width inp-border promocode-inp" value={promoInput} onChange={(e)=>setPromoInput(e.target.value)} />
                    <button class="icon-button input-grp-btn btn-right inp-border promocode-btn" onClick={checkPromoCode}><i class="bi bi-search"></i></button>
                </div> 
                <PromoHelper/>                  
            </section>
        );
    }

    return (
        <aside class="cart-summary">
            <section class="summary-header">
                <h4 class="heading3 medium text-center">Checkout</h4>
            </section>

            <button class="btn btn-link td heading4 medium text-center summary-promocode" onClick={openInput}>Have A Promo Code?</button>
            { viewInput ? <PromoInput/> : " " }

            <div class="summary-line line-minor m-t6"> </div>

            <section class="summary-content m-t5">
                <section class="summary-details">
                    <h6 class="text4 regular">Subtotal : </h6>     
                    <h6 class="text4 regular">{subTotalPrice}</h6>   
                </section>
                <section class="summary-details">
                    <h6 class="text4 regular">Coupon : </h6>     
                    <h6 class="text4 regular">- {couponPrice}</h6>    
                </section> 
                <section class="summary-details">
                    <h6 class="text4 regular">Delivery : </h6>     
                    <h6 class="text4 regular">+ {deliveryPrice}</h6>  
                </section>
                <section class="summary-details">
                    <h6 class="text4 regular">Taxes ({taxPercent}%) : </h6>     
                    <h6 class="text4 regular">+ {taxPrice}</h6>    
                </section>                       
            </section>
            <div class="summary-line m-t5"> </div>
            <section class="summary-details total-price m-t5">
                <h6 class="text3 regular">Total : </h6>     
                <h6 class="text3 regular">{totalPrice}</h6>    
            </section>
            <button class="btn btn-primary text-uppercase m-t30 checkout-btn" type="button">Check Out</button>      
        </aside>
    );
}
export { CartSummary }