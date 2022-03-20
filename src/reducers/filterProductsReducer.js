import { useContext, useReducer } from "react";
import { ProductContext } from "../context";

const useFilters = ( ) => {

    const { product } = useContext(ProductContext); 
	const { loader:prdLoader, products, error:prdError } = product;

    const initialState = {
        showInventory: true,
		rangeBy: 90,
        showCategory: [],
        sortBy: ""
    };

    const [ state, dispatch  ] = useReducer(reducer, initialState);
      function reducer(state, action) {
        switch (action.type) {
			case "INVENTORY":
				return (state = {
				...state,
				showInventory: !state.showInventory
				});
			case "RANGE":
				return (state = {
				  ...state,
				  rangeBy: action.payload
				});
			case "CATEGORY":
				return (state = {
				...state,
				showCategory: state.showCategory.includes(action.payload) 
        		? state.showCategory.filter((present) => present !== action.payload)
        		: [...state.showCategory, action.payload ]
				});
			case "SORT":
				return {
				...state,
				sortBy: action.payload
				};
            case "CLEAR":
                return initialState;
			default:
				return state;
        }
      }

      function getSortedData(productList, sortBy) {
        if (sortBy && sortBy === "High-Low") {
          return productList.sort((a, b) => b.price - a.price);
        }
    
        if (sortBy && sortBy === "Low-High") {
          return productList.sort((a, b) => a.price - b.price);
        }
        return productList;
      }

      function getCategroyData(productList, showCategory) {
        if( showCategory.length!==0 ){
            return productList.filter( prd => showCategory.includes( prd.categoryName ) );
          }      
        return productList;
      }

	  function getRangeData(productList, rangeBy ) {
        return productList.filter( prd => prd.price >= rangeBy );
      }
    
      function getFilteredData(productList, showInventory ) {
        return productList.filter( prd => showInventory ? prd.outOfStock == false : true );
      }

      const sortedData = getSortedData( products, state.sortBy);
      const categoryData = getCategroyData(sortedData, state.showCategory);
	  const sliderData = getRangeData(categoryData, state.rangeBy);
      const inventoryData = getFilteredData( sliderData , state.showInventory );

	console.log(inventoryData)
    return ( { inventoryData, state, dispatch })
}

export { useFilters }