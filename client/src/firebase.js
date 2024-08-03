// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cffb7.firebaseapp.com",
  projectId: "mern-estate-cffb7",
  storageBucket: "mern-estate-cffb7.appspot.com",
  messagingSenderId: "744837638436",
  appId: "1:744837638436:web:c8a09b4f331deebcccebb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);