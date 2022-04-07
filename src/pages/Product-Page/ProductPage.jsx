import { useEffect, useState } from 'react';
import { FilterSection, ProductCard, SpinLoader, Alert } from '../../components';
import { MobileFilter } from '../../components/FilterSection/MobileFilter';
import { usePagination } from '../../util/Pagination';
import { useCartActions, useProductActions, useWishlistActions, useFilters } from '../../context';
import { itemsPerPageProduct } from '../../util/data';
import './product-page.css'

const ProductPage = () => {

    const [ viewAlert, setViewAlert ] = useState(false);
    const [ viewAlert1, setViewAlert1 ] = useState(false);
    const [ viewMobile, setViewMobile ] = useState(false);
    const { product } = useProductActions(); 
	const { loader } = product;
    const { state: cart , addCart, matchUndo } = useCartActions();
    const { productAdded } = cart;
    const { state: wishlist , addWishlist, dispatch:wishlistDispatch } = useWishlistActions();

    const{ inventoryData, state, dispatch } = useFilters();

    const handleOutOfStock = () => setViewAlert(true);
    const closeAlert = () => setViewAlert(false) || setViewAlert1(false) || setViewMobile(false);

    const { pageChange, prev, next, prevGrp, nextGrp, pageData, getPaginationGroup} = usePagination(inventoryData, itemsPerPageProduct);
    const handleChange = (e) => pageChange(e.target.value);

    useEffect( () => {
        if(productAdded){
            setViewAlert1(true);
            matchUndo();
        }
    },[productAdded])

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
    };

    return (
        <main className="product-list">
            <section className='mobile-section'>
                <button onClick={() => setViewMobile(true)} className='text4 medium btn text-uppercase filter-open-btn font-color'>Filter</button>
                {viewMobile ? <MobileFilter state={state} dispatch={dispatch} close={closeAlert} />:""}
            </section>
            <FilterSection state={state} dispatch={dispatch}/>
            <section>
                <section className="product-grid grid-4-cols"> 
                    {viewAlert1 && <Alert customClass={'prdwarn'} action={'info'} closefn={closeAlert} title={'Product Added'} description={'Change the quantity in cart page.'}/>}
                    {viewAlert && <Alert customClass={'prdwarn'} action={'warning'} closefn={closeAlert} title={'Out of Stock'} description={'The product is currently out of stock'}/>}
                    { loader && <SpinLoader/>}
                    {pageData() && pageData().map((item) => (
                        <ProductCard key={item._id} cardValue={item} addCart={addCart} addWishlist={addWishlist} handleOutOfStock={handleOutOfStock}/>
                    ))}
                    {inventoryData.length === 0 ? <div className=' text3 medium font-color no-prd-text'>No Items Found</div> : ' ' }
                </section>   
                <Pagination/>
            </section>
        </main>
    );
}

export { ProductPage }