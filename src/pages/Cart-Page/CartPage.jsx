import { useEffect } from 'react';
import Images from '../../asset/image';
import { CartCard, CartSummary } from '../../components';
import { useCartActions, useUserActions, useWishlistActions } from '../../context';
import './cart.css'

const CartPage = () => {
    const { state } = useUserActions();
    const { tokenPresent } = state;
    const { state:cartState, getCart, deleteCart, addQty, subQty} = useCartActions(); 
    const { addWishlist } = useWishlistActions();   

    useEffect(()=>{
        getCart()
    },[ ])

    return(
    <>
    { tokenPresent 
        ? cartState.cartInfo.length !== 0 
            ? ( <main className="cart-list"> 
                    <section className="cart-grid"> 
                        {cartState.cartInfo && cartState.cartInfo.map(( cartValue ) => (
                            <CartCard key={cartValue._id} deleteCart={deleteCart} addQty={addQty} subQty={subQty} addWishlist={addWishlist} cartValue={cartValue}/>
                        ))}
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