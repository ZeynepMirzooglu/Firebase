
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB13fg82g2tB7qfSYW_c_IrnbiCF1r23vA",
  authDomain: "fir-cbf97.firebaseapp.com",
  projectId: "fir-cbf97",
  storageBucket: "fir-cbf97.firebasestorage.app",
  messagingSenderId: "830494585320",
  appId: "1:830494585320:web:caba9fe768c6a1ed1b745d",
  measurementId: "G-JXK6YJ84VJ"
};


const app = initializeApp(firebaseConfig);

const DB= getFirestore();

const AUTH = getAuth();

export {DB,AUTH}