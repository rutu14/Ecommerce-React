import { toast } from "react-toastify";

const WishListCard = ({ addCart, deleteWishlist, wishlistValue }) => {
    const{
        _id,
        title,
        brand,
        image,
        price,
        onSale,
        salePrice,
        rating } = wishlistValue;

    const prdPrice = price.toLocaleString('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 })
    const onSalePrice = salePrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 })
    const discount = Number((( price - salePrice ) / price ) * 100);

    const deleteWislistItem = () => {
        deleteWishlist(_id);
    }

    const addtoCart = () => {
        addCart( wishlistValue );
        toast.info("Added to Cart");
    }

    return(                    
        <div class="card card-box-shadow wishlist-card" key={_id}>
            <div className="card-title-box middle-overlay product-rating">
                <i className="bi bi-stars rating-icon"></i>{rating}
            </div>
            {onSale ? (<div className="discount-badge">{discount.toFixed(0)}% OFF</div>) : " " }
            <img class="card-img card-img-border wishlist-card-img" alt={`${brand}-${title}`} src={image} />
            <button class="btn wishlist-icon-btn cp" onClick={deleteWislistItem}>
                <i class="bi bi-suit-heart-fill wishlist-icon"></i> 
            </button>
            <div class="card-title-box product-card-title-box">
                <h2 class="card-title medium">{brand}</h2>
                <h3 class="card-subtitle medium">{title}</h3>
            </div>
            <div class="card-content text4 product-card-content">
                {onSale 
                    ? (<>
                        <span className="sale-price">{prdPrice}</span>
                        <span>{onSalePrice}</span>
                    </>)    
                : prdPrice}                   
            </div>
            <div class="wishlist-btns">
                <button class="btn btn-primary outline text-uppercase wishlist-btn" onClick={addtoCart} type="button">
                    <i class="bi bi-cart-plus inside-btn product-btn-icon"></i>Move to Cart
                </button>
            </div>
        </div>
    );
}

export { WishListCard }