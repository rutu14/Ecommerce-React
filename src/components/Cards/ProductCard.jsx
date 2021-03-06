import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useUserActions } from "../../context";

const ProductCard = ({cardValue, addCart, addWishlist, handleOutOfStock}) => {   
    const navigate = useNavigate();
    const { state } = useUserActions();
    const { tokenPresent } = state;
    
    const addtoCart = () => {
        if(tokenPresent){
            addCart( cardValue );
            toast.info("Adding to Cart");
        }else{
            navigate('/login');
        }
    }

    const addtoWishlist = () => {
        if(tokenPresent){
            addWishlist( cardValue );
            toast.info("Adding to Wishlist");
        }else{
            navigate('/login');
        }
    }

    const { _id,
        title,
        brand,
        image,
        price,
        onSale,
        salePrice,    
        outOfStock,
        rating } = cardValue;

    const prdPrice = price.toLocaleString('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 })
    const onSalePrice = salePrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 })
    const discount = Number((( price - salePrice ) / price ) * 100);
    
    return (       
        <div className="card card-box-shadow product-card" key={_id}>
            {outOfStock ? <div className="out-of-stock">
                <p className="out-of-stock-label medium text-center">Out Of Stock</p>
                </div> : "" }
            <div className="card-title-box middle-overlay product-rating">
                <i className="bi bi-stars rating-icon"></i>{rating}
            </div>
            {onSale ? (<div className="discount-badge">{discount.toFixed(0)}% OFF</div>) : " " }
            <img className="card-img card-img-border product-card-img" alt={`${brand}-${title}`} src={image}/>
            <div className="card-title-box product-card-title-box">
                <h2 className="card-title medium">{brand}</h2>
                <h3 className="card-subtitle medium">{title}</h3>
            </div>
            <div className="card-content text4 product-card-content">
                {onSale ? (<>
                            <span className="sale-price">{prdPrice}</span>
                            <span>{onSalePrice}</span>
                            </>)    
                : prdPrice}                 
            </div>
            <div className="product-btns">
                <button className="btn btn-primary outline text-uppercase hero-btn product-btn wishlist-btn" onClick={addtoWishlist} type="button">
                    <i className="bi bi-heart inside-btn product-btn-icon"></i>WishList
                </button>
                {outOfStock 
                ?   <button className="btn btn-primary text-uppercase hero-btn product-btn cna" 
                    onClick={handleOutOfStock} type="button">
                        <i className="bi bi-cart inside-btn product-btn-icon"></i>Add to Cart
                    </button>
                :   <button className="btn btn-primary text-uppercase hero-btn product-btn"
                    onClick={addtoCart} type="button">
                        <i className="bi bi-cart inside-btn product-btn-icon"></i>Add to Cart
                    </button>
                }                
            </div>
        </div>
    );
}

export { ProductCard }