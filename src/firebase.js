import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAFvRvVbHkP384h-SlwAZAISAsholPE8RI",
    authDomain: "converse-chatapp.firebaseapp.com",
    projectId: "converse-chatapp",
    storageBucket: "converse-chatapp.appspot.com",
    messagingSenderId: "474285809262",
    appId: "1:474285809262:web:187ed86d4283c2ceb9507f",
}).auth();