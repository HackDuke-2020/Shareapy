import Fire from "../../firebase/Fire";
const fire = new Fire();
const { firebase, db, auth } = fire;

const sendMessage = (message) => {
	return async (dispatch, getState) => {
		if (message) {
			const currentUid = auth.currentUser.uid;
			await db
				.collection("users")
				.doc(currentUid)
				.update({
					messages: firebase.firestore.FieldValue.arrayUnion(message),
				});

			dispatch({ type: "UPDATE_MESSAGES", message });
		}
	};
};

export { sendMessage };
