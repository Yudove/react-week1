// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB97llE7Uz0jxpcmEWFVSbI8ww4Aznb_Pg",
  authDomain: "sparta-react-basic-b25f9.firebaseapp.com",
  projectId: "sparta-react-basic-b25f9",
  storageBucket: "sparta-react-basic-b25f9.appspot.com",
  messagingSenderId: "1023541383572",
  appId: "1:1023541383572:web:564d0adcf672a4faf2bf81",
  measurementId: "G-4VZDSFBV21"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);