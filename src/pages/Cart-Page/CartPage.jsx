import { useEffect } from 'react';
import Images from '../../asset/image';
import { CartCard, CartSummary } from '../../components';
import { usePagination } from '../../util/Pagination';
import { useCartActions, useUserActions, useWishlistActions } from '../../context';
import { itemsPerPageCart } from '../../util/data';
import './cart.css';

const CartPage = () => {
    const { state } = useUserActions();
    const { tokenPresent } = state;
    const { state:cartState, getCart, deleteCart, addQty, subQty} = useCartActions(); 
    const { addWishlist } = useWishlistActions();   
    
    const { pageChange, prev, next, prevGrp, nextGrp, pageData, getPaginationGroup} = usePagination(cartState.cartInfo, itemsPerPageCart);
    const handleChange = (e) => pageChange(e.target.value);

    useEffect( () =>{
        if( pageData().length === 0 ){
            prev();
        }
    },[pageData()])
    

    useEffect(()=>{
        getCart()
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
        ? cartState.cartInfo.length !== 0 
            ? ( <main className="cart-list"> 
                    <section className="cart-grid"> 
                        {pageData() && pageData().map(( cartValue ) => ( 
                            <CartCard key={cartValue._id} deleteCart={deleteCart} addQty={addQty} subQty={subQty} addWishlist={addWishlist} cartValue={cartValue}/>
                        ))} 
                        <Pagination/>
                    </section>
                    <CartSummary cartProducts={cartState.cartInfo}/> 
                </main> )
            : ( <h3 className="heading2 medium m-t100 text-center font-color">
                    Add Items To Cart
                </h3>)
        : (<div className='cart-page-head'>        
                <img className='cart-page-img' src={Images.cartPageImage} alt={'CartPage - Box '}/>
                <h3 className="heading2 medium text-center font-color">Login to view your Cart.</h3> 
            </div>
        )
    }
    </> 
    );
}

export { CartPage }