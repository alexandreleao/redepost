import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyAe_7uxrglw-lCrSnqyyFfaVdxxLptq2WQ",
    authDomain: "redepost.firebaseapp.com",
    projectId: "redepost",
    storageBucket: "redepost.appspot.com",
    messagingSenderId: "916937127374",
    appId: "1:916937127374:web:2ae529349b0b85097c679f",
    measurementId: "G-YWF1C0GJ9H"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;