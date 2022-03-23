import { useContext, useEffect, useState } from 'react';
import Images from '../../asset/image';
import { CartCard, CartSummary } from '../../components';
import { CartContext, UserContext } from '../../context';
import './cart.css'

const CartPage = () => {
    const { state } = useContext(UserContext);
    const { tokenPresent } = state;
    const { state:cartState, getCart, deleteCart, addQty, subQty} = useContext(CartContext)    

    useEffect(()=>{
        getCart()
        subTotal()
    },[ ])

    const [ priceCal, setPriceCal ] = useState(0.00)

    const subTotal = () => {
        cartState.cartInfo.map(( cartValue ) => {
            setPriceCal( ( cal ) => cal + ( cartValue.price * cartValue.qty ));
            if( cartValue.onSale ){
                const diff = cartValue.price - cartValue.salePrice;
                setPriceCal( ( cal ) => cal + ( diff * cartValue.qty ) );
            }
        })
    }

    return(
    <>
    { tokenPresent 
        ? cartState.cartInfo.length !== 0 
            ? ( <main class="cart-list"> 
                    <section class="cart-grid"> 
                        {cartState.cartInfo && cartState.cartInfo.map(( cartValue ) => (
                            <CartCard deleteCart={deleteCart} addQty={addQty} subQty={subQty} cartValue={cartValue}/>
                        ))}
                    </section>
                    <CartSummary subTotal={priceCal}/> 
                </main> )
            : ( <h3 className="heading2 medium m-t100 text-center">
                    Add Items To Cart
                </h3>)
        : (<div className='cart-page-head'>        
                <img className='cart-page-img' src={Images.cartPageImage} alt={'CartPage - Box '}/>
                <h3 className="heading2 medium text-center">Login to view your Cart.</h3> 
            </div>
        )
    }
    </> 
    );
}

export { CartPage }