import firebase from "firebase";
import "firebase/firestore";

class Fire {
	constructor() {
		const firebaseConfig = {
			apiKey: "AIzaSyA6vI5cdlia-XB6QvE0PRvFKY6oOEBxplY",
			authDomain: "hackduke-51599.firebaseapp.com",
			databaseURL: "https://hackduke-51599.firebaseio.com",
			projectId: "hackduke-51599",
			storageBucket: "hackduke-51599.appspot.com",
			messagingSenderId: "57851519323",
			appId: "1:57851519323:web:f5f6282389051193053a7e",
			measurementId: "G-T594R90K2X",
		};

		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}
		this.firebase = firebase;
		this.db = firebase.firestore();
		this.auth = firebase.auth();
	}
}

export default Fire;
