// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL0DZ6y8p0R_7LSm4ga6Xi2jV08OBq3as",
  authDomain: "user-email-password-auth-c9cfa.firebaseapp.com",
  projectId: "user-email-password-auth-c9cfa",
  storageBucket: "user-email-password-auth-c9cfa.appspot.com",
  messagingSenderId: "1049838808196",
  appId: "1:1049838808196:web:e432b470188019a0a266d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;