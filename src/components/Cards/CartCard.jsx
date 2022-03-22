const CartCard = ({ deleteCart, addQty, subQty, cartValue }) => {
    const{
        _id,
        title,
        brand,
        image,
        price,
        onSale,
        salePrice,
        rating,
        categoryName,
        qty } = cartValue;

    const prdPrice = price.toLocaleString('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 })
    const onSalePrice = salePrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 })
    const discount = Number((( price - salePrice ) / price ) * 100);

    const deleteCartItem = () => {
        deleteCart(_id)
    }

    const addCartItemQty = () => {
        addQty(_id)
    }

    const deleteCartItemQty = () => {
        subQty(_id)
    }

    return(                   
        <div class="card horizontal-large card-box-shadow cart-card m-t20">
            <div className="card-title-box middle-overlay product-rating">
                <i className="bi bi-stars rating-icon"></i>{rating}
            </div>
            {onSale ? (<div className="discount-badge">{discount.toFixed(0)}% OFF</div>) : " " }
            <img class="card-img horizontal-large-img card-h-img-border-l cart-card-img" alt={`${brand}-${title}`} src={image}/>
            <div class="card-body horizontal-large-content cart-card-width">
                <div class="card-title-box cart-card-width">
                    <h2 class="card-title medium">{brand}</h2>
                    <h3 class="card-subtitle medium">{title}</h3>
                </div>
                <div class="card-content text4 product-card-content cart-card-width">
                    {onSale 
                        ? (<>
                            <span className="sale-price">{prdPrice}</span>
                            <span>{onSalePrice}</span>
                            </>)    
                        : prdPrice}  
                </div> 
                <div class="card-primary-btn m-t10">
                    <button class="btn btn-primary outline text-uppercase cart-action-btn wishlist-btn" type="button">
                    Move to Wishlist
                    </button>
                    <button class="btn btn-primary text-uppercase medium cart-action-btn delete-btn" onClick={deleteCartItem} type="button">
                    Remove from Cart</button>
                </div>                 
            </div>                
            <div class="card-actions h-large-action cart-action m-t10">
                <h4 class="text4 medium">Quantity</h4>
                <div class="quantity-input">
                    <button class="btn-primary-float quantity-btns" onClick={deleteCartItemQty}  type="button"><i class="bi bi-dash"></i></button>
                    <input id="text-input" class="text-input login-input text-center quantity-inp" type="number" value={qty} readOnly />
                    <button class="btn-primary-float quantity-btns" onClick={addCartItemQty} type="button"><i class="bi bi-plus"></i></button>
                </div>
            </div>                
        </div> 
    );
}

export { CartCard }