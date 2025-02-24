// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDuYdaKuaolY4HnIVhk90SC8U9ZyJl2iA",
  authDomain: "sesion-3-fe665.firebaseapp.com",
  projectId: "sesion-3-fe665",
  storageBucket: "sesion-3-fe665.firebasestorage.app",
  messagingSenderId: "904865015775",
  appId: "1:904865015775:web:617853d3335c0e9fccc66a",
  measurementId: "G-1NKVLB7RGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

