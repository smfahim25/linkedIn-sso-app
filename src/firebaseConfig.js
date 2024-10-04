// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKXZ2NBm0S7KyhwyBkIVlL5FXZa7OmRvw",
  authDomain: "linkedinsso.firebaseapp.com",
  projectId: "linkedinsso",
  storageBucket: "linkedinsso.appspot.com",
  messagingSenderId: "865001467799",
  appId: "1:865001467799:web:5d5d2761e1c458cd0a1ed2",
  measurementId: "G-1L786N5W6C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
