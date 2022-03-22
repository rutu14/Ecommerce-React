const CartSummary = () => {
    return (
        <aside class="cart-summary">
            <section class="summary-header">
                <h4 class="heading3 medium text-center">Checkout</h4>
            </section>

            <a class="btn-link td heading4 medium text-center summary-promocode">Have A Promo Code?</a>
            <section class="promocode-content m-t5">
                <button class="icon-button promocode-cross"><i class="bi bi-x"></i></button>  
                <div class="input-grp promocode-inp-grp">
                    <input type="text" class="input-grp-right text-input input-width inp-border promocode-inp" />
                    <button class="icon-button input-grp-btn btn-right inp-border promocode-btn"><i class="bi bi-search"></i></button>
                </div>                             
            </section>
            <div class="summary-line line-minor m-t6"> </div>

            <section class="summary-content m-t5">
                <section class="summary-details">
                    <h6 class="text4 regular">Subtotal : </h6>     
                    <h6 class="text4 regular">₹ 2000.00</h6>   
                </section>
                <section class="summary-details">
                    <h6 class="text4 regular">Delivery : </h6>     
                    <h6 class="text4 regular">₹ 20.00</h6>  
                </section>
                <section class="summary-details">
                    <h6 class="text4 regular">Coupon : </h6>     
                    <h6 class="text4 regular">₹ 00.00</h6>    
                </section> 
                <section class="summary-details">
                    <h6 class="text4 regular">Taxes (5%) : </h6>     
                    <h6 class="text4 regular">₹ 100.00</h6>    
                </section>                       
            </section>
            <div class="summary-line m-t5"> </div>
            <section class="summary-details m-t5">
                <h6 class="text3 regular">Total : </h6>     
                <h6 class="text3 regular">₹ 2120.00</h6>    
            </section>
            <button class="btn btn-primary text-uppercase m-t30 checkout-btn" type="button">Check Out</button>      
        </aside>
    );
}
export { CartSummary }