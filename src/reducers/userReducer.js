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
                loginerror: true,
                loginerrorMsg: action.payload
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
                userInfo: action.payload,
                tokenPresent: true
            });
        case "SIGNUP_ERROR":
            return (state = {
                ...state,
                loader: false,
                signuperror: true,
                signuperrorMsg: action.payload
            });
		default:
			return state;
        }
}
export { userReducer }