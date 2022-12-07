// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import "firebase/database"

const firebaseConfig = {
  apiKey: "######################",
  authDomain: "#############",
  projectId: "#########",
  storageBucket: "########",
  messagingSenderId: "#########",
  appId: "###########",
  measurementId: "########"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export {firebase}
