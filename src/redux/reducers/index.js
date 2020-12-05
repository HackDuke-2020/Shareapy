const initialState = {
	user: { isSignedIn: false, messages: [] },
	errors: { loginError: null, signupError: null },
	searchedUser: null,
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

		case "UPDATE_POSTS": {
			const newPosts = [...state.user.posts, action.post];
			newPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

			return {
				...state,
				user: {
					...state.user,
					posts: newPosts,
				},
			};
		}

		case "UPDATE_CHALLENGES": {
			const newPosts = [...state.user.posts, action.post];
			newPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

			return {
				...state,
				user: {
					...state.user,
					posts: newPosts,
					completed: [...state.user.completed, action.post.text],
				},
			};
		}

		case "CLEAR_SEARCHED_USER": {
			return {
				...state,
				searchedUser: null,
			};
		}

		case "SET_SEARCHED_USER": {
			console.log(action.user);
			return {
				...state,
				searchedUser: action.user,
			};
		}

		default: {
			return { ...state };
		}
	}
};

export default rootReducer;
