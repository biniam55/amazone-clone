import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdp37zskD0oHWu1--xWdNzUI08WGreotM",
  authDomain: "auth1-a92a7.firebaseapp.com",
  projectId: "auth1-a92a7",
  storageBucket: "auth1-a92a7.appspot.com",
  messagingSenderId: "722126255419",
  appId: "1:722126255419:web:c4da3a20e1ba3a24b2731e",
  measurementId: "G-Y0126RQLTM"
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); 
const auth = firebase.auth();

export { db, auth };

// const firebaseConfig = {
//   apiKey: "AIzaSyDdp37zskD0oHWu1--xWdNzUI08WGreotM",
//   authDomain: "auth1-a92a7.firebaseapp.com",
//   projectId: "auth1-a92a7",
//   storageBucket: "auth1-a92a7.appspot.com",
//   messagingSenderId: "722126255419",
//   appId: "1:722126255419:web:c4da3a20e1ba3a24b2731e",
//   measurementId: "G-Y0126RQLTM"
// };
