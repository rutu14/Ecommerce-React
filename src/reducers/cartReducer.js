const cartReducer = (state, action) => {
    switch (action.type) {
		case "CART_REQUEST":
			return (state = {
                ...state,
                loader: true
            });
		case "CART_SUCCESS":
			return (state = {
                ...state,
                loader: false,
                cartInfo: action.payload
            });
        case "CART_SUCCESS_MATCH":
			return (state = {
                ...state,
                loader: false,
                productAdded: true
            });
        case "CART_SUCCESS_MATCH_UNDO":
            return (state = {
                ...state,
                loader: false,
                productAdded: false
            });
        case "CART_ERROR":
            return (state = {
                ...state,
                loader: false,
                error: true,
                errorMsg: action.payload
            });
		default:
			return state;
        }
}
export { cartReducer}