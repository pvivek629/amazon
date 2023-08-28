import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXkxwj8qWaTpYllCH3zElnz3hIhV2QQvw",
  authDomain: "clone-95163.firebaseapp.com",
  projectId: "clone-95163",
  storageBucket: "clone-95163.appspot.com",
  messagingSenderId: "597913480191",
  appId: "1:597913480191:web:77e3c672391c585bd5d5ca",
  measurementId: "G-250HXC87HL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth};