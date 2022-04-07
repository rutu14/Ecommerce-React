import { useEffect } from "react";
import Images from "../../asset/image";
import { WishListCard } from "../../components";
import { usePagination } from '../../util/Pagination';
import { useCartActions, useUserActions, useWishlistActions } from "../../context";
import './wishlist.css'
import { itemsPerPageWishlist } from "../../util/data";

const WishlistPage = () => {
    const { state } = useUserActions();
    const { tokenPresent } = state;
    const { state:wishlistState, getWishlist, deleteWishlist } = useWishlistActions();  
    const { addCart } = useCartActions();  

    const { pageChange, prev, next, prevGrp, nextGrp, pageData, getPaginationGroup} = usePagination(wishlistState.wishlistInfo, itemsPerPageWishlist);
    const handleChange = (e) => pageChange(e.target.value);

    useEffect( () =>{
        if( pageData().length === 0 ){
            prev();
        }
    },[pageData()])

    useEffect(()=>{
        getWishlist()
    },[ ])

    const Pagination = () => {
            return(
                <section className='pagination-wrapper'>        
                    <button className="icon-button btn font-color cp" onClick={prevGrp}><i className="bi bi-chevron-bar-left"></i></button>                                    
                    <button className='icon-button btn font-color cp' onClick={prev}><i className="bi bi-chevron-left"></i></button>
                    { getPaginationGroup().map((item, index) => (
                        <button className='text3 btn pagination-btns cp' value={item} onClick={handleChange} key={index}>{item}</button>
                    ))}
                    <button className='icon-button btn font-color cp' onClick={next}><i className="bi bi-chevron-right"></i></button>
                    <button className='icon-button btn font-color cp' onClick={nextGrp}><i className="bi bi-chevron-bar-right"></i></button>
                </section>
            )
    }

    return(
    <>
    { tokenPresent 
        ? wishlistState.wishlistInfo.length !== 0 
            ? ( <main>
                <h3 className="heading2 medium text-center m-t40 font-color">Captured in your 
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" vertical-align="text-top" height="40" fill="#7f1a78" class="bi bi-bag-heart" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                    </svg>
                </h3>
                <section className="wishlist-grid grid-4-cols grid-mobile"> 
                    {pageData() && pageData().map(( wishlistValue ) => ( 
                        <WishListCard key={wishlistValue._id} addCart={addCart} deleteWishlist={deleteWishlist} wishlistValue={wishlistValue}/>
                    ))}
                </section>
                <Pagination/>
                </main> )
            : ( <h3 className="heading2 medium m-t100 text-center font-color">
                    Add Items To WishList✨
                </h3>)
        : (<div className='cart-page-head'>        
        <h3 className="heading2 medium text-center font-color">Login to view your WishList.</h3> 
                <img className='cart-page-img' src={Images.wishlistPageImage} alt={'CartPage - Box '}/>
                
            </div>
        )
    }
    </> 
    );
}

export { WishlistPage }