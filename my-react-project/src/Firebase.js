// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmUiiqE2l87yp-2aNAY6jPGjyE0KFq0Nk",
  authDomain: "react-firebase-50d01.firebaseapp.com",
  projectId: "react-firebase-50d01",
  storageBucket: "react-firebase-50d01.appspot.com",
  messagingSenderId: "771380854064",
  appId: "1:771380854064:web:30fd6f5fc4ff2c179c9cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

