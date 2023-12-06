// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-portfolio-c2d51.firebaseapp.com",
  projectId: "my-portfolio-c2d51",
  storageBucket: "my-portfolio-c2d51.appspot.com",
  messagingSenderId: "501573038974",
  appId: "1:501573038974:web:44a7788782d2ff99bef92f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);