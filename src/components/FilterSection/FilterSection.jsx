import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CategoryContext } from "../../context";
import { Loader } from "../index";

const FilterSection = ( {state , dispatch}  ) => {
    const { categoryName } = useParams(); 
	let navigate = useNavigate();
	const [ sliderValue, setSliderValue ] = useState(90)
    const { category } = useContext(CategoryContext); 
	const { loader, info, error } = category;
    const [ preDeclared, setPreDeclared ] = useState( categoryName )

	const handleFormReset = (e) =>{
		dispatch({ type: "CLEAR" })
		setSliderValue(90)
        navigate('/product', {replace: true});
    }
    useEffect( () => {
        if( preDeclared ){
            dispatch({ type: "CATEGORY", payload: preDeclared })
        }
    },[])
    
	const { showInventory, rangeBy, showCategory, sortBy } = state;
    return(
        <aside className="filter-section">
            <form>
            <section className="filter-header">
                <h4 className="heading3 medium">Filters</h4>
                <a className="btn-link filter-btn" onClick={handleFormReset} role="button">Reset</a>
            </section>

			<h4 className="heading4 filter-section-heading medium">Stock Check</h4>
            <section className="filter-1 m-t5">
                    <div>
						<input id='stockCheck' type="checkbox" className="checkbox" name="category" value={ showInventory }
						onChange={() =>
							dispatch({ type: "INVENTORY" })
						  }
						 checked={showInventory}/>
                        <label htmlFor='stockCheck'>In Stock</label>   
                    </div> 
            </section>
        
            <h4 className="heading4 filter-section-heading medium m-t10">Pricing</h4>
            <section className="filter-1 m-t5">
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
            
            <h4 className="heading4 filter-section-heading medium m-t10">Category</h4>
            { loader && <Loader/>}
            <section className="filter-1 m-t5">
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

            <h4  className="heading4 filter-section-heading medium m-t10">Price-Range</h4>
            <section className="filter-1 m-t5">
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
        </aside>
    );
}

export { FilterSection }

