// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//importamos firestorebase
import { getFirestore } from "firebase/firestore";


//configuramos dotenv
import dotenv from 'dotenv';
dotenv.config();


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCZZ1Gf7H0jb5gqkw2mwf7KNpXxrU3hMfg",
//   authDomain: "practica-node-js.firebaseapp.com",
//   projectId: "practica-node-js",
//   storageBucket: "practica-node-js.firebasestorage.app",
//   messagingSenderId: "66547656532",
//   appId: "1:66547656532:web:a6235e12f77772f850cac1"
// };


//configuramos con las variables del .env
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
// Export the Firestore database
