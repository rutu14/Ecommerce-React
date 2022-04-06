const defaultValue = { 
    showInventory: true,
	rangeBy: 90,
    showCategory: [],
    sortBy: "",
    searchFor: null
};

const filterReducer = (state, action) => {
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
        case "SEARCH":
            return {
            ...state,
            searchFor: action.payload
            };
        case "CLEAR":
            return defaultValue;
		default:
			return state;
    }
}

export { filterReducer }