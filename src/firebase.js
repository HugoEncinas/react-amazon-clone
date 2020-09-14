import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCZmy1lkyik9Xu1m1vCtVAwra9sGXuBW1E",
  authDomain: "clone-bec8f.firebaseapp.com",
  databaseURL: "https://clone-bec8f.firebaseio.com",
  projectId: "clone-bec8f",
  storageBucket: "clone-bec8f.appspot.com",
  messagingSenderId: "950860637510",
  appId: "1:950860637510:web:adc12dc81523e9230b3147"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };