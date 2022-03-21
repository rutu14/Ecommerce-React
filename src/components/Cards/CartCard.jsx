const CartCard = () => {
    return(
<section class="cart-grid">            
            <div class="card horizontal-large card-box-shadow cart-card m-t20">
                <img class="card-img horizontal-large-img card-h-img-border-l cart-card-img" alt="Product-Image" src="/assests/images/product-page/clothing (1).png"/>
                <div class="card-body horizontal-large-content cart-card-width">
                    <div class="card-title-box cart-card-width">
                        <h2 class="card-title medium">Frills</h2>
                        <h3 class="card-subtitle medium">Beige Crop Top</h3>
                    </div>
                    <div class="card-content text4 product-card-content cart-card-width">
                        ₹ 950
                    </div> 
                    <div class="card-primary-btn m-t10">
                        <button class="btn btn-primary outline text-uppercase cart-action-btn wishlist-btn" type="button">
                        Move to Wishlist
                        </button>
                        <button class="btn btn-primary text-uppercase medium cart-action-btn delete-btn" type="button">Remove from Cart</button>
                    </div>                 
                </div>                
                <div class="card-actions h-large-action cart-action m-t10">
                    <h4 class="text4 medium">Quantity</h4>
                    <div class="quantity-input">
                        <button class="btn-primary-float quantity-btns" type="button"><i class="bi bi-dash"></i></button>
                        <input id="text-input" class="text-input login-input text-center quantity-inp" type="number" value="1" />
                        <button class="btn-primary-float quantity-btns" type="button"><i class="bi bi-plus"></i></button>
                    </div>
                </div>                
            </div> 
                              
            <div class="card horizontal-large card-box-shadow cart-card m-t20">
                <img class="card-img horizontal-large-img card-h-img-border-l cart-card-img" alt="Product-Image" src="/assests/images/product-page/clothing (4).jfif"/>
                <div class="card-body horizontal-large-content cart-card-width">
                    <div class="card-title-box cart-card-width">
                        <h2 class="card-title medium">Mango</h2>
                        <h3 class="card-subtitle medium">Women's Shirt</h3>
                    </div>
                    <div class="card-content text4 product-card-content cart-card-width">
                        ₹ 1100
                    </div> 
                    <div class="card-primary-btn m-t10">
                        <button class="btn btn-primary outline text-uppercase cart-action-btn wishlist-btn" type="button">
                        Move to Wishlist
                        </button>
                        <button class="btn btn-primary text-uppercase medium cart-action-btn delete-btn" type="button">Remove from Cart</button>
                    </div>                 
                </div>                
                <div class="card-actions h-large-action cart-action m-t10">
                    <h4 class="text4 medium">Quantity</h4>
                    <div class="quantity-input">
                        <button class="btn-primary-float quantity-btns" type="button"><i class="bi bi-dash"></i></button>
                        <input id="text-input" class="text-input login-input text-center quantity-inp" type="number" value="1" />
                        <button class="btn-primary-float quantity-btns" type="button"><i class="bi bi-plus"></i></button>
                    </div>
                </div>                
            </div> 

            <div class="card horizontal-large card-box-shadow cart-card m-t20">
                <img class="card-img horizontal-large-img card-h-img-border-l cart-card-img" alt="Product-Image" src="/assests/images/cloth.jfif"/>
                <div class="card-body horizontal-large-content cart-card-width">
                    <div class="card-title-box cart-card-width">
                        <h2 class="card-title medium">Colors</h2>
                        <h3 class="card-subtitle medium">Women's Formal Shirt</h3>
                    </div>
                    <div class="card-content text4 product-card-content cart-card-width">
                        ₹ 1500 <span class="sale-price"> ₹ 3500 </span>
                    </div> 
                    <div class="card-primary-btn m-t10">
                        <button class="btn btn-primary outline text-uppercase cart-action-btn wishlist-btn" type="button">
                        Move to Wishlist
                        </button>
                        <button class="btn btn-primary text-uppercase medium cart-action-btn delete-btn" type="button">Remove from Cart</button>
                    </div>                 
                </div>                
                <div class="card-actions h-large-action cart-action m-t10">
                    <h4 class="text4 medium">Quantity</h4>
                    <div class="quantity-input">
                        <button class="btn-primary-float quantity-btns" type="button"><i class="bi bi-dash"></i></button>
                        <input id="text-input" class="text-input login-input text-center quantity-inp" type="number" value="1" />
                        <button class="btn-primary-float quantity-btns" type="button"><i class="bi bi-plus"></i></button>
                    </div>
                </div>                
            </div>               
        </section> 
    );
}

export { CartCard }