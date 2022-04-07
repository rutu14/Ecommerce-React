import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";
import { useProductActions } from "./productContext";

const defaultValue = { 
    showInventory: true,
	rangeBy: 90,
    showCategory: [],
    sortBy: "",
    searchFor: null
};

const FilterContext = createContext(defaultValue);

const FilterProvider = ({ children }) => {

    const { product } = useProductActions(); 
	const { products } = product;

    const [ state, dispatch ] = useReducer(filterReducer, defaultValue);

    const getSearchedData = (productList, searchFor) => {
        if( searchFor !== null ){
            return productList.filter( prd => prd.brand.toLowerCase() === searchFor.toLowerCase() );
        }
        return productList;
    }

    const getSortedData = (productList, sortBy) => {
        if (sortBy && sortBy === "High-Low") {
          return productList.sort((a, b) => b.price - a.price);
        }
        if (sortBy && sortBy === "Low-High") {
          return productList.sort((a, b) => a.price - b.price);
        }
        return productList;
    }

	const getCategoryData = (productList, showCategory) => {
        if( showCategory.length!==0 ){
            return productList.filter( prd => showCategory.includes( prd.categoryName ) );
        }      
        return productList;
    }

	const getRangeData = (productList, rangeBy ) => {
        return productList.filter( prd => prd.price >= rangeBy );
    }
    
	const getFilteredData = (productList, showInventory ) => {
        return productList.filter( prd => showInventory ? prd.outOfStock == false : true );
    }
    
    const sortedData = getSortedData( products, state.sortBy);
    const categoryData = getCategoryData(sortedData, state.showCategory);
	const sliderData = getRangeData(categoryData, state.rangeBy);
    const searchData = getSearchedData( sliderData, state.searchFor);
    const inventoryData = getFilteredData( searchData , state.showInventory );

    return <FilterContext.Provider value={ { searchData, inventoryData, state, dispatch } }>
                {children}
            </FilterContext.Provider>
}

const useFilters = () => useContext(FilterContext);

export { FilterProvider, useFilters };