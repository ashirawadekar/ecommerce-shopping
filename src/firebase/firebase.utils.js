import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClNUxLKRMvWosPBwMY9FJS9FywExYyFZQ",
  authDomain: "ecommerce-db-1d6f0.firebaseapp.com",
  databaseURL: "https://ecommerce-db-1d6f0.firebaseio.com",
  projectId: "ecommerce-db-1d6f0",
  storageBucket: "ecommerce-db-1d6f0.appspot.com",
  messagingSenderId: "747987443796",
  appId: "1:747987443796:web:797baf298ce6d0901d0dc1",
  measurementId: "G-R0HTMK0BZV"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;