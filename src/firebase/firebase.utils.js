import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCx2cguDF1JWVoWVOIm3sWMaZ8YWQkrOT8",
  authDomain: "crwn-db-90a59.firebaseapp.com",
  databaseURL: "https://crwn-db-90a59.firebaseio.com",
  projectId: "crwn-db-90a59",
  storageBucket: "crwn-db-90a59.appspot.com",
  messagingSenderId: "314856472559",
  appId: "1:314856472559:web:2fccf2a05a830cdc01c01a",
  measurementId: "G-RBWDRMCXNX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
