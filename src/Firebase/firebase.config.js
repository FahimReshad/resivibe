// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi_uVq4_HnENQJf9bT7hug_xRJnyng2oU",
  authDomain: "assignment-09-real-estate.firebaseapp.com",
  projectId: "assignment-09-real-estate",
  storageBucket: "assignment-09-real-estate.appspot.com",
  messagingSenderId: "817748205196",
  appId: "1:817748205196:web:66f7104a08a7f85817a5a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth;