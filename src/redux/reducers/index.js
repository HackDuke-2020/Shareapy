const initialState = {
	user: { isSignedIn: false, messages: [] },
	errors: { loginError: null, signupError: null },
};

const rootReducer = (state = initialState, action) => {
	console.log(action.type);
	switch (action.type) {
		case "CHECKED_SIGNED_IN_USER": {
			return { ...state, user: action.user };
		}

		case "LOGIN_SUCCESS": {
			return { ...state, user: { ...state.user, ...action.user } };
		}

		case "SET_ERROR": {
			return {
				...state,
				errors: { ...state.errors, [action.errorType]: action.error },
			};
		}

		case "SIGNOUT": {
			return { ...state, user: { isSignedIn: false } };
		}

		case "CLEAR_ERROR": {
			return {
				...state,
				errors: { ...state.errors, [action.errorType]: null },
			};
		}

		case "UPDATE_MESSAGES": {
			return {
				...state,
				user: {
					...state.user,
					messages: [...state.user.messages, action.message],
				},
			};
		}

		default: {
			return { ...state };
		}
	}
};

export default rootReducer;
