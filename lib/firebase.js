// // Import core Firebase functions
// import { initializeApp, getApps } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Optional: Only import analytics if we're on the client
// // But NOT used unless you specifically need analytics
// // import { getAnalytics } from "firebase/analytics";

// // ✅ Firebase config from your Firebase Console
// const firebaseConfig = {
//   apiKey: "AIzaSyDUgLotIZK79WZRmwX9dnJeNhYSyXUy_ws",
//   authDomain: "soulcircleauth.firebaseapp.com",
//   projectId: "soulcircleauth",
//   storageBucket: "soulcircleauth.firebasestorage.app",
//   messagingSenderId: "565162650503",
//   appId: "1:565162650503:web:46c7db5dd3ab3c9ba98122",
//   measurementId: "G-TRVR8Q4Z5T",
// };

// // ✅ Only initialize Firebase once (important for hot reloads in dev)
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// // ✅ Export Auth (used for login/signup/logout)
// export const auth = getAuth(app);

// // ❌ Do NOT call getAnalytics() unless you’re on the client
// // This causes 'window is not defined' error on the server
