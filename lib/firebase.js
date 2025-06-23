// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUgLotIZK79WZRmwX9dnJeNhYSyXUy_ws",
  authDomain: "soulcircleauth.firebaseapp.com",
  projectId: "soulcircleauth",
  storageBucket: "soulcircleauth.firebasestorage.app",
  messagingSenderId: "565162650503",
  appId: "1:565162650503:web:46c7db5dd3ab3c9ba98122",
  measurementId: "G-TRVR8Q4Z5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);