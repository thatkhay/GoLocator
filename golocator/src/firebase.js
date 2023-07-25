// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZtIr6Bcyj8nJCiTzNmyu2P1NdksTcKDY",
  authDomain: "auth-dev-899f2.firebaseapp.com",
  projectId: "auth-dev-899f2",
  storageBucket: "auth-dev-899f2.appspot.com",
  messagingSenderId: "538579026418",
  appId: "1:538579026418:web:8f78878f4a79e75189ab6b",
  measurementId: "G-XTLYW2BPCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);

