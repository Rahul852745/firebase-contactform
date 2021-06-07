import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    //firebase credentials
    // Your web app's Firebase configuration
    apiKey: "AIzaSyATwd5NS9zz8AYSYg_MXuHsa2LAEjek8n4",
    authDomain: "contactform-87cbb.firebaseapp.com",
    projectId: "contactform-87cbb",
    storageBucket: "contactform-87cbb.appspot.com",
    messagingSenderId: "200557195733",
    appId: "1:200557195733:web:7018f4510791d955bbcd5c"
});

var db = firebase.firestore();

export {db};