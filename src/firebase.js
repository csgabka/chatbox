import firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "chatbox-c869f.firebaseapp.com",
    databaseURL: "https://chatbox-c869f.firebaseio.com",
    projectId: "chatbox-c869f",
    storageBucket: "chatbox-c869f.appspot.com",
    messagingSenderId: "245751615680",
    appId: "1:245751615680:web:a159f1a6cd0a98f9625d25",
    measurementId: "G-HJSF19GTDN"
  };

firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
