// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { } from 'firebase/auth';
import { } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8ZEz6HAi3Gyv7IdYcliOZXw_ofe9KQbk",
  authDomain: "testserver-e90f3.firebaseapp.com",
  projectId: "testserver-e90f3",
  storageBucket: "testserver-e90f3.appspot.com",
  messagingSenderId: "744256065956",
  appId: "1:744256065956:web:7a8de61f437710dd07f131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

