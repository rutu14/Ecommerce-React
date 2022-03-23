import { useContext, useEffect } from "react";
import Images from "../../asset/image";
import { WishListCard } from "../../components";
import { CartContext, UserContext, WishlistContext } from "../../context";
import './wishlist.css'

const WishlistPage = () => {
    const { state } = useContext(UserContext);
    const { tokenPresent } = state;
    const { state:wishlistState, getWishlist, deleteWishlist } = useContext(WishlistContext);  
    const { addCart } = useContext(CartContext);  

    useEffect(()=>{
        getWishlist()
    },[ ])

    return(
    <>
    { tokenPresent 
        ? wishlistState.wishlistInfo.length !== 0 
            ? ( <main>
                <h3 className="heading2 medium text-center m-t40">Captured in your 
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" vertical-align="text-top" height="40" fill="#7f1a78" class="bi bi-bag-heart" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                    </svg>
                </h3>
                <section className="wishlist-grid grid-4-cols grid-mobile"> 
                        {wishlistState.wishlistInfo && wishlistState.wishlistInfo.map(( wishlistValue ) => (
                            <WishListCard addCart={addCart} deleteWishlist={deleteWishlist} wishlistValue={wishlistValue}/>
                        ))}
                </section>
                </main> )
            : ( <h3 className="heading2 medium m-t100 text-center">
                    Add Items To WishList✨
                </h3>)
        : (<div className='cart-page-head'>        
        <h3 className="heading2 medium text-center">Login to view your WishList.</h3> 
                <img className='cart-page-img' src={Images.wishlistPageImage} alt={'CartPage - Box '}/>
                
            </div>
        )
    }
    </> 
    );
}

export { WishlistPage }