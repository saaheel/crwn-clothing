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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists) {
      const { displayName, email } =  userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;