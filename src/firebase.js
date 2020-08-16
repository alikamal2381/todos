/* const firebaseConfig = {
  apiKey: "AIzaSyAA8paiEnAlb5Ptx_m1Xcxn1ExIuQSe-vI",
  authDomain: "todo-app-b6a52.firebaseapp.com",
  databaseURL: "https://todo-app-b6a52.firebaseio.com",
  projectId: "todo-app-b6a52",
  storageBucket: "todo-app-b6a52.appspot.com",
  messagingSenderId: "758511208116",
  appId: "1:758511208116:web:2b255dc6705bcfd40ef9e1",
  measurementId: "G-4L3JB82RK0",
}; */

import firebase from "firebase";

const firebaseApp = firebase.initializeapp({
  apiKey: "AIzaSyAA8paiEnAlb5Ptx_m1Xcxn1ExIuQSe-vI",
  authDomain: "todo-app-b6a52.firebaseapp.com",
  databaseURL: "https://todo-app-b6a52.firebaseio.com",
  projectId: "todo-app-b6a52",
  storageBucket: "todo-app-b6a52.appspot.com",
  messagingSenderId: "758511208116",
  appId: "1:758511208116:web:2b255dc6705bcfd40ef9e1",
  measurementId: "G-4L3JB82RK0",
});

const db = firebaseApp.firestore();

export default db;

/// this is commit for testing
