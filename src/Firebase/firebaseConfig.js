// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKvITn9snxzIXzmGjSf4md9vyScthJZEk",
  authDomain: "mentorship-190a1.firebaseapp.com",
  projectId: "mentorship-190a1",
  storageBucket: "mentorship-190a1.appspot.com",
  messagingSenderId: "814729064737",
  appId: "1:814729064737:web:0fc8e33f6bce1c577b4e60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db};