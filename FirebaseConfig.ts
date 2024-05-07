// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIyALRh34NeSStDJLZvmfq1dW7WLEzCkY",
  authDomain: "gymapp-fda75.firebaseapp.com",
  projectId: "gymapp-fda75",
  storageBucket: "gymapp-fda75.appspot.com",
  messagingSenderId: "854447478260",
  appId: "1:854447478260:web:6bd56c719af36d62ef15a1"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);