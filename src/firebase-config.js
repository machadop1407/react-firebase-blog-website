import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc7PJ9309GQRO0v2-mCUhBIWpOAnNyec8",
  authDomain: "blogproject-92aa7.firebaseapp.com",
  projectId: "blogproject-92aa7",
  storageBucket: "blogproject-92aa7.appspot.com",
  messagingSenderId: "135318509256",
  appId: "1:135318509256:web:034fab8084a0ad39e3b7fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
