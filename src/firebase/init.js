import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyATO5_l-xiqI-etisW4iKvRD9NTAr8KEEU",
    authDomain: "edgaras-smoothies.firebaseapp.com",
    databaseURL: "https://edgaras-smoothies.firebaseio.com",
    projectId: "edgaras-smoothies",
    storageBucket: "edgaras-smoothies.appspot.com",
    messagingSenderId: "978162119308",
    appId: "1:978162119308:web:1086d99ce5175e6ad3c1a9",
    measurementId: "G-XJMX5GTWLW"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  //const db = firebase.firestore();
//b.settings({ timestampsInSnapshots: true });

  // export firestore database
  export default firebase.firestore();