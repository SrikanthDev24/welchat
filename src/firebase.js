// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA35i7HZSbjpmmcWYz7EN2H5rHEZNNaE1U",
  authDomain: "welchat-98a42.firebaseapp.com",
  projectId: "welchat-98a42",
  storageBucket: "welchat-98a42.appspot.com", // ✅ Corrected here
  messagingSenderId: "603453816022",
  appId: "1:603453816022:web:c5dc215fb97dfafa0a1d77",
  measurementId: "G-48B13RM0M9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
