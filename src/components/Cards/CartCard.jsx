import { toast } from "react-toastify";

const CartCard = ({ deleteCart, addQty, subQty, addWishlist, cartValue }) => {
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

    const addToWishList = () => {
        addWishlist(cartValue);
        deleteCart(_id);
        toast.info("Moved to Wishlist");
    }

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
        <div className="card horizontal-large card-box-shadow cart-card m-t20">
            <div className="card-title-box middle-overlay product-rating-cart">
                <i className="bi bi-stars rating-icon"></i>{rating}
            </div>
            {onSale ? (<div className="discount-badge">{discount.toFixed(0)}% OFF</div>) : " " }
            <img className="card-img horizontal-large-img card-h-img-border-l cart-card-img" alt={`${brand}-${title}`} src={image}/>
            
            <section className="cart-section">
                <div className="card-body card-content">
                    <div className="card-title-box font-color">
                        <h2 className="card-title medium">{brand}</h2>
                        <h3 className="card-subtitle medium">{title}</h3>
                    </div>
                    <div className="card-content text4 font-color">
                        {onSale 
                            ? (<>
                                <span className="font-color">Price: </span>
                                <span className="sale-price">{prdPrice}</span>
                                <span>{onSalePrice}</span>
                                </>)    
                            : (<>
                                <span className="font-color">Price: </span>
                                <span>{prdPrice}</span>
                                </>) 
                        }  
                    </div>                  
                </div>                
                <div className="card-actions cart-action">
                    <h4 className="text4 medium font-color">Quantity</h4>
                    <div className="quantity-input">
                        <button className="btn-primary-float quantity-btns" onClick={deleteCartItemQty}  type="button"><i className="bi bi-dash"></i></button>
                        <input id="text-input" className="text-input login-input text-center quantity-inp" type="number" value={qty} readOnly />
                        <button className="btn-primary-float quantity-btns" onClick={addCartItemQty} type="button"><i className="bi bi-plus"></i></button>
                    </div>
                </div>  
                <div className="card-primary-btn">
                        <button className="btn btn-primary outline text-uppercase cart-action-btn wishlist-btn" onClick={addToWishList} type="button">
                        Move to Wishlist
                        </button>
                        <button className="btn btn-primary text-uppercase medium cart-action-btn delete-btn" onClick={deleteCartItem} type="button">
                        Remove from Cart</button>
                </div>
            </section>              
        </div> 
    );
}

export { CartCard }