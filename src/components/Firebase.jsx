// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP1ZFMGc3lpv4xegxH7mCP7_og3WTy4Z0",
  authDomain: "kazloc.firebaseapp.com",
  projectId: "kazloc",
  storageBucket: "kazloc.firebasestorage.app",
  messagingSenderId: "240647622748",
  appId: "1:240647622748:web:613c16ae5182dcb2f4d699",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export default app;