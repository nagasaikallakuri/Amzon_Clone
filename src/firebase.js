import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAON40dntWcwY1WcjDSo348zMolcjrEvIk",
  authDomain: "clone-82d49.firebaseapp.com",
  projectId: "clone-82d49",
  storageBucket: "clone-82d49.appspot.com",
  messagingSenderId: "997762170109",
  appId: "1:997762170109:web:4e3311cdf5a629121b9294",
  measurementId: "G-TXZ1NR80RD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };