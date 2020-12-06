import Fire from "../../firebase/Fire";

const fire = new Fire();
const { firebase, db, auth } = fire;

const checkForSignedInUser = () => {
	return async (dispatch, getState) => {
		auth.onAuthStateChanged(async (user) => {
			let userData = { isSignedIn: false };
			if (user !== null) {
				const currentUid = auth.currentUser.uid;

				const querySnapshot = await db
					.collection("users")
					.doc(currentUid)
					.get();
				const queryData = querySnapshot.data();

				const { following, followers, completed, name } = queryData;
				let posts = queryData.posts;

				const followersPosts = await getFollowersPosts(following);
				const justMyPosts = posts;
				posts = [...posts, ...followersPosts];

				if (posts !== undefined) {
					posts.sort((a, b) => (a.date > b.date ? -1 : 1));
				}

				userData = {
					email: user.email,
					displayName: name,
					uid: user.uid,
					isSignedIn: true,
					posts,
					completed,
					justMyPosts,
					following,
					followers,
				};
			}
			dispatch({ type: "CHECKED_SIGNED_IN_USER", user: userData });
		});
	};
};

const getFollowersPosts = async (following) => {
	let followersPosts = [];

	for (const otherUid of following) {
		const querySnapshot = await db
			.collection("users")
			.doc(otherUid)
			.get();
		const queryData = querySnapshot.data();
		const otherPosts = queryData.posts;
		if (otherPosts && otherPosts.length !== 0) {
			followersPosts = [...followersPosts, ...otherPosts];
		}
	}

	return followersPosts;
};

const login = (email, password) => {
	return async (dispatch, getState) => {
		try {
			await auth.signInWithEmailAndPassword(email, password);
			const user = {
				email: auth.currentUser.email,
				displayName: auth.currentUser.displayName,
				uid: auth.currentUser.uid,
			};

			dispatch({ type: "LOGIN_SUCCESS", user });
		} catch (error) {
			dispatch({ type: "SET_ERROR", error, errorType: "loginError" });
		}
	};
};

const signup = (name, email, password) => {
	return async (dispatch, getState) => {
		try {
			if (!name) {
				throw { message: "Please enter a name." };
			}
			const result = await auth.createUserWithEmailAndPassword(email, password);

			const currentUid = auth.currentUser.uid;
			await db
				.collection("users")
				.doc(currentUid)
				.set({
					messages: [],
					posts: [],
					following: [],
					name,
					followers: [],
					completed: [],
				});

			await result.user.updateProfile({ displayName: name });
		} catch (error) {
			dispatch({ type: "SET_ERROR", errorType: "signupError", error });
		}
	};
};

const clearError = (errorType) => {
	return (dispatch, getState) => {
		dispatch({ type: "CLEAR_ERROR", errorType });
	};
};

const signout = () => {
	return (dispatch, getState) => {
		auth.signOut();
		dispatch({ type: "SIGNOUT" });
	};
};

export { checkForSignedInUser, login, clearError, signup, signout };
