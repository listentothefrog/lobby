import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7rL3NqYt1YRVtvvgofabgZQqa24s-pmQ",
  authDomain: "lobbydemos.firebaseapp.com",
  projectId: "lobbydemos",
  storageBucket: "lobbydemos.appspot.com",
  messagingSenderId: "544423438814",
  appId: "1:544423438814:web:d7359709e785be67f4554f",
  measurementId: "G-T8GCYTPEPG",
};

initializeApp(firebaseConfig);
// auth
export const auth = getAuth();

// firestore
export const db = getFirestore();
