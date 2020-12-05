import Fire from "../../firebase/Fire";

const fire = new Fire();
const { firebase, db, auth } = fire;

const makePost = (name1, name2, text, type) => {
	return async (dispatch, getState) => {
		if (!name2) {
			name2 = "";
		}

		const post = {
			name1,
			name2,
			text,
			type,
			date: Date.now(),
		};

		const currentUid = auth.currentUser.uid;
		await db
			.collection("users")
			.doc(currentUid)
			.update({
				posts: firebase.firestore.FieldValue.arrayUnion(post),
			});

		dispatch({ type: "UPDATE_POSTS", post });
	};
};

export { makePost };
