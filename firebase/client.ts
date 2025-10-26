import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARjbVlhFGDh5PRbRhnAybMSRbakJf81X4",
    authDomain: "prepwise-6372b.firebaseapp.com",
    projectId: "prepwise-6372b",
    storageBucket: "prepwise-6372b.firebasestorage.app",
    messagingSenderId: "1037869637687",
    appId: "1:1037869637687:web:159d9a19dc44f5a725dfb2",
    measurementId: "G-5RYFE0XDMK"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);