import Fire from "../../firebase/Fire";

const fire = new Fire();
const { firebase, db, auth } = fire;

import { checkForSignedInUser } from "./auth";

const search = (name) => {
	return async (dispatch, getState) => {
		try {
			const querySnapshot = await db
				.collection("users")
				.where("name", "==", name)
				.get();

			if (querySnapshot.empty) {
				throw { message: "nobody has that name" };
			}

			const user = querySnapshot.docs[0].data();

			const cleaned = {
				...user,
				uid: querySnapshot.docs[0].id,
			};

			dispatch({ type: "SET_SEARCHED_USER", user: cleaned });
		} catch (error) {
			dispatch({ type: "SET_ERROR", error, errorType: "search" });
			dispatch({ type: "CLEAR_SEARCHED_USER" });
		}
	};
};

const follow = (uid) => {
	return async (dispatch, getState) => {
		const currentUid = auth.currentUser.uid;
		await db
			.collection("users")
			.doc(currentUid)
			.update({ following: firebase.firestore.FieldValue.arrayUnion(uid) });

		await db
			.collection("users")
			.doc(uid)
			.update({
				followers: firebase.firestore.FieldValue.arrayUnion(currentUid),
			});

		dispatch(checkForSignedInUser());
	};
};

export { search, follow };
