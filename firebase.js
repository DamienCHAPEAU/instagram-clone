// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTCjVcpAEfOYhF_clI4Oxam0NWT7BQ0vc",
    authDomain: "instagram-clone-6fd90.firebaseapp.com",
    projectId: "instagram-clone-6fd90",
    storageBucket: "instagram-clone-6fd90.appspot.com",
    messagingSenderId: "1061754539948",
    appId: "1:1061754539948:web:075ea82ae828d1043bb409",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
