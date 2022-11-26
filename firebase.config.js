import { initializeApp } from "firebase/app";
import {getFirestore, getFireStore} from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAxyA9nmqGsoi-Lm4ncgiQbZJXesDB0DQI",
  authDomain: "house-marketplace-app-a0ce3.firebaseapp.com",
  projectId: "house-marketplace-app-a0ce3",
  storageBucket: "house-marketplace-app-a0ce3.appspot.com",
  messagingSenderId: "947145104289",
  appId: "1:947145104289:web:08ae134160020a21f409e0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore(); 

