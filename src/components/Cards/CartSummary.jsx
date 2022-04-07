import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { deliveryCost, taxPercent } from "../../util/data"
import { PromoInput } from "./PromoInput";

const CartSummary = ({ cartProducts }) => {

    const [ disabledPointer, setDisabledPointer ] = useState('');
    const [ viewInput, setViewInput ] = useState(false);
    const openInput = () => setViewInput(true);
    const resettingCoupon = () => {
        setOtherPrices({ ...otherPrices, coupon: 0 });
        setDisabledPointer('');
        toast.info("Coupon Value Resetted!");
    }
    const ResetCoupon = () => (<a className="btn-link coupon-reset font-color" onClick={resettingCoupon} role="button">Reset Coupon</a>)
    
    const [ otherPrices, setOtherPrices ] = useState({ delivery: 0, coupon: 0, tax: 0, total: 0 });
    const intialValue = { subTotal: 0 }

    const calSubTotal = cartProducts.reduce(( accumulator, cartProduct ) => ({
        ...accumulator,
        subTotal: cartProduct.onSale ? accumulator.subTotal + ( cartProduct.salePrice * cartProduct.qty ) : accumulator.subTotal + ( cartProduct.price * cartProduct.qty )
    }), intialValue)

    useEffect( () =>{
        setOtherPrices( { ...otherPrices,  delivery: deliveryCost, tax: (( taxPercent / 100 ) * calSubTotal.subTotal), total: ( calSubTotal.subTotal + otherPrices.delivery + otherPrices.tax - otherPrices.coupon) });
    },[ calSubTotal.subTotal, otherPrices.coupon, otherPrices.tax ])
    
    const subTotalPrice = calSubTotal.subTotal.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
    const couponPrice = otherPrices.coupon.toLocaleString('en-IN', { style: 'currency', currency: 'INR'})
    const deliveryPrice = otherPrices.delivery.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
    const taxPrice = otherPrices.tax.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
    const totalPrice = otherPrices.total.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })

    return (
        <aside className="cart-summary">
          
            <section className="summary-header">
                <h4 className="heading3 medium text-center font-color">Checkout</h4>
            </section>

            <button className="btn btn-link td heading4 medium text-center summary-promocode font-color" onClick={openInput}>Have A Promo Code?</button>
            { viewInput ? <PromoInput disabledPointer={disabledPointer} setDisabledPointer={setDisabledPointer} otherPrices={otherPrices} setOtherPrices={setOtherPrices} setViewInput={setViewInput} /> : " " }
            
            <div className="summary-line line-minor m-t6"> </div>

            <section className="summary-content m-t5 font-color">
                <section className="summary-details">
                    <h6 className="text4 regular">Subtotal : </h6>     
                    <h6 className="text4 regular">{subTotalPrice}</h6>   
                </section>
                <section className="summary-details">
                    <h6 className="text4 regular">Coupon : </h6>     
                    <h6 className="text4 regular">- {couponPrice}</h6>    
                </section> 
                <section className="summary-details">
                    <h6 className="text4 regular">Delivery : </h6>     
                    <h6 className="text4 regular">+ {deliveryPrice}</h6>  
                </section>
                <section className="summary-details">
                    <h6 className="text4 regular">Taxes ({taxPercent}%) : </h6>     
                    <h6 className="text4 regular">+ {taxPrice}</h6>    
                </section>                       
            </section>
            <div className="summary-line m-t5"> </div>
            <section className="summary-details font-color total-price m-t5">
                <h6 className="text3 regular">Total : </h6>     
                <h6 className="text3 regular">{totalPrice}</h6>    
            </section>
            <button className="btn btn-primary text-uppercase m-t30 checkout-btn" type="button">Check Out</button>      
            {otherPrices.coupon !== 0 ? <ResetCoupon/> : " "}
        </aside>
    );
}
export { CartSummary }