const addressReducer = (state, action) => {
    switch (action.type) {
		case "ADDRESS_REQUEST":
			return (state = {
                ...state,
                loader: true
            });
		case "ADDRESS_SUCCESS":
			return (state = {
                ...state,
                loader: false,
                addressInfo: action.payload
            });
        case "ADDRESS_ERROR":
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
export { addressReducer }