// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqNbVd_Rku6aIDSVohLfEyJBdTDEEheVs",
    authDomain: "ifood-594e1.firebaseapp.com",
    projectId: "ifood-594e1",
    storageBucket: "ifood-594e1.appspot.com",
    messagingSenderId: "512723647051",
    appId: "1:512723647051:web:34cdee62ade0a27a8fabce",
    measurementId: "G-NHXENDBWLE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// console.log(app);
export{app, db};