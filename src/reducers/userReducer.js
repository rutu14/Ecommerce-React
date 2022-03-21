const userReducer = (state, action) => {
    switch (action.type) {
		case "LOGIN_REQUEST":
			return (state = {
                ...state,
                loader: true
            });
		case "LOGIN_SUCCESS":
			return (state = {
                ...state,
                loader: false,
                userInfo: action.payload,
                tokenPresent: true
            });
        case "LOGIN_ERROR":
            return (state = {
                ...state,
                loader: false,
                error: true,
                errorMsg: action.payload
            });
        case "LOGOUT":
            return (state = {
                ...state,
                tokenPresent: false
            });
        case "SIGNUP_REQUEST":
			return (state = {
                ...state,
                loader: true
            });
		case "SIGNUP_SUCCESS":
			return (state = {
                ...state,
                loader: false,
                createdUser: action.payload,
                tokenPresent: true
            });
        case "SIGNUP_ERROR":
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
export { userReducer}