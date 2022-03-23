import { useContext, useEffect, useState } from 'react';
import { FilterSection, ProductCard, SpinLoader, Alert } from '../../components';
import { CartContext, ProductContext, WishlistContext } from '../../context';
import { useFilters } from '../../reducers';
import './product-page.css'

const ProductPage = () => {

    const [ viewAlert, setViewAlert ] = useState(false);
    const [ viewAlert1, setViewAlert1 ] = useState(false);
    const { product } = useContext(ProductContext); 
	const { loader } = product;
    const { state: cart , addCart, dispatch:cartDispatch } = useContext(CartContext);
    const { productAdded } = cart;
    const { state: wishlist , addWishlist, dispatch:wishlistDispatch } = useContext(WishlistContext);

    const{ inventoryData, state, dispatch } = useFilters( );

    const handleOutOfStock = () => setViewAlert(true);
    const closeAlert = () => setViewAlert(false) || setViewAlert1(false);

    useEffect( () => {
        if(productAdded){
            setViewAlert1(true)
            cartDispatch({ type: "CART_SUCCESS_MATCH_UNDO" })
        }
    },[productAdded])

    return (
        <main className="product-list">
            <FilterSection state={state} dispatch={dispatch} />
            <section className="product-grid grid-4-cols"> 
            {viewAlert1 && <Alert customClass={'prdwarn'} action={'info'} closefn={closeAlert} title={'Product Added'} description={'Change the quantity in cart page.'}/>}
            {viewAlert && <Alert customClass={'prdwarn'} action={'warning'} closefn={closeAlert} title={'Out of Stock'} description={'The product is currently out of stock'}/>}
            { loader && <SpinLoader/>}
            {inventoryData && inventoryData.map((item) => (
                <ProductCard key={item._id} cardValue={item} addCart={addCart} addWishlist={addWishlist} handleOutOfStock={handleOutOfStock}/>
            )) }                                  
            </section>   
        </main>
    );
}

export { ProductPage }