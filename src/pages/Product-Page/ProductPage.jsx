import { useContext, useEffect, useState } from 'react';
import { FilterSection, ProductCard, SpinLoader, Alert } from '../../components';
import { ProductContext } from '../../context';
import { useFilters } from '../../reducers';
import './product-page.css'

const ProductPage = () => {
    const [ viewAlert, setViewAlert ] = useState(false);
    const { product } = useContext(ProductContext); 
	const { loader, products, error } = product;
    const{ inventoryData, state, dispatch } = useFilters( );
    const handleOutOfStock = () => setViewAlert(true);
    const closeAlert = () => setViewAlert(false);
    return (
        <main className="product-list">
            <FilterSection state={state} dispatch={dispatch} />
            <section className="product-grid grid-4-cols"> 
            {viewAlert && <Alert customClass={'prdwarn'} action={'warning'} closefn={closeAlert} title={'Out of Stock'} description={'The product is currently out of stock'}/>}
                { loader && <SpinLoader/>}
                {inventoryData && inventoryData.map((item) => (
                    <ProductCard key={item._id} cardValue={item} handleOutOfStock={handleOutOfStock}/>
                )) }                                  
            </section>   
        </main>
    );
}

export { ProductPage }