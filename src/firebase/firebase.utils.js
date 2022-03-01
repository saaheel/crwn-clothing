import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBowyB3pXrswJx6ikutc4E0QBk1Vr1M-to",
    authDomain: "crwn-db-6cbc7.firebaseapp.com",
    projectId: "crwn-db-6cbc7",
    storageBucket: "crwn-db-6cbc7.appspot.com",
    messagingSenderId: "124610686283",
    appId: "1:124610686283:web:51a547f872f800a5480cce",
    measurementId: "G-1JPW55E7GS"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;