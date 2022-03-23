const wishlistReducer = (state, action) => {
    switch (action.type) {
		case "WISHLIST_REQUEST":
			return (state = {
                ...state,
                loader: true
            });
		case "WISHLIST_SUCCESS":
			return (state = {
                ...state,
                loader: false,
                wishlistInfo: action.payload
            });
        case "WISHLIST_SUCCESS_MATCH":
			return (state = {
                ...state,
                loader: false,
                productAdded: true
            });
        case "WISHLIST_SUCCESS_MATCH_UNDO":
            return (state = {
                ...state,
                loader: false,
                productAdded: false
            });
        case "WISHLIST_ERROR":
            return (state = {
                ...state,
                loader: false,
                error: true,
                errorMsg: action.payload
            });
        case "WISHLIST_ON_LOGOUT":
            return (state = {
                ...state,
                loader: false,
                wishlistInfo: [ ]
            });
		default:
			return state;
        }
}
export { wishlistReducer}