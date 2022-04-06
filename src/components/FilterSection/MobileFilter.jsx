import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useCategoryActions } from "../../context";
import { SpinLoader } from "../index";

const MobileFilter = ( {state , dispatch, close}  ) => {
    const { categoryName } = useParams(); 
	let navigate = useNavigate();
	const [ sliderValue, setSliderValue ] = useState(90)
    const { category } = useCategoryActions(); 
	const { loader, info, error } = category;
    const [ preDeclared, setPreDeclared ] = useState( categoryName );
    const { showInventory, rangeBy, showCategory, sortBy } = state;
    const [ searchInput, setSearchInput ] = useState(" ");

    const handleSearchData = () => {
        dispatch({ type:"SEARCH", payload: searchInput });
        close();
    }

	const handleFormReset = (e) =>{
		dispatch({ type: "CLEAR" })
		setSliderValue(90)
        setSearchInput("");

        //navigate('/product', {replace: true});
    }
    
    useEffect( () => {
        if( preDeclared ){
            dispatch({ type: "CATEGORY", payload: preDeclared })
        }
    },[])
    
    return(
        <aside className='filter-section mobile-filter-section'>
            <button className="icon-button font-color " onClick={close} ><i className="bi bi-x"></i></button>
            <form>
            <section className="filter-header">
                <h4 className="heading3 medium font-color">Filters</h4>
                <a className="btn-link filter-btn font-color" onClick={handleFormReset} role="button">Reset</a>
            </section>

			<h4 className="heading4 filter-section-heading medium font-color">Stock Check</h4>
            <section className="filter-1 m-t5 font-color">
                    <div>
						<input id='stockCheck' type="checkbox" className="checkbox" name="category" value={ showInventory }
						onChange={() =>
							dispatch({ type: "INVENTORY" })
						  }
						 checked={showInventory}/>
                        <label htmlFor='stockCheck'>In Stock</label>   
                    </div> 
            </section>
        
            <h4 className="heading4 filter-section-heading medium m-t10 font-color">Pricing</h4>
            <section className="filter-1 m-t5 font-color">
                 <div>
                    <input id="low-high" type="radio" className="radiobtn" name="sort"
					value={sortBy} 
                    onChange={() => 
					dispatch({ type: "SORT", payload: "Low-High" })
					}
					checked={sortBy && sortBy === "Low-High"}
					/>
                    <label htmlFor="low-high">Low to High</label>   
                </div>
                <div className="m-t5">
                    <input id="high-low" type="radio" className="radiobtn" name="sort" value={sortBy} 
                    onChange={() =>
                        dispatch({ type: "SORT", payload: "High-Low" })
                      }
                      checked={sortBy && sortBy === "High-Low"}
                      />
                    <label htmlFor="high-low">High to Low</label>
                </div>                        
            </section> 
            
            <h4 className="heading4 filter-section-heading medium m-t10 font-color">Category</h4>
            { loader && <SpinLoader/>}
            <section className="filter-1 m-t5 font-color">
                {info && info.map((item) => (
                    <div key={item._id}>
						<input id={item.categoryName} type="checkbox" className="checkbox" name="category" value={ showCategory }
						onChange={() => { setPreDeclared(null)
							dispatch({ type: "CATEGORY", payload: item.categoryName })
						  }}                          
						 checked={ preDeclared === item.categoryName || showCategory.includes(item.categoryName) } 
                         />
                        <label htmlFor={item.categoryName}>{item.categoryName}</label>   
                    </div>                                      
                ))
                }
            </section>

            <h4 className="heading4 filter-section-heading medium m-t10 font-color">Price-Range</h4>
            <section className="filter-1 m-t5 font-color">
                <div className="slider-grp">
					<span className="range-label">₹{sliderValue}</span>
                    <input type="range" id="range-input" min={1} max={30000}
					value={sliderValue} 
					onChange={(e) => { setSliderValue(e.target.value)
						dispatch({ type: "RANGE", payload: e.target.value })
					  }}
					  className="slider" list="label"/>                                      
                </div>    
            </section>
        
        </form>
        <h4 className="heading4 filter-section-heading medium m-t10 font-color">Search By Brand</h4>
            <section className="m-t5 input-grp input-pos search-on-mobile-grp">
            <input type="text" value={searchInput} onChange={ e => setSearchInput(e.target.value) } className="input-grp-right text-input input-width search-on-mobile inp-border" />
            <button className="icon-button input-grp-btn btn-right inp-border" onClick={handleSearchData} ><i className="bi bi-search"></i></button>
            </section> 
        </aside>
    );
}

export { MobileFilter }

