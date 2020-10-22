import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAjqAdiJy9_tBaI4HXI1mHgJr-FJ-Xu3k8",
    authDomain: "discord-clone-93302.firebaseapp.com",
    databaseURL: "https://discord-clone-93302.firebaseio.com",
    projectId: "discord-clone-93302",
    storageBucket: "discord-clone-93302.appspot.com",
    messagingSenderId: "671021190257",
    appId: "1:671021190257:web:463e0c8cb22b31a6909fd0",
    measurementId: "G-HWEYFZEHSV"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;