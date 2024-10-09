import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTlcVYER8qOmxEQNRSKy74FQWVh5qbRzo",
  authDomain: "sign-in-eaea9.firebaseapp.com",
  projectId: "sign-in-eaea9",
  storageBucket: "sign-in-eaea9.appspot.com",
  messagingSenderId: "303010504826",
  appId: "1:303010504826:web:04792a928771c4e66c1bc3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
