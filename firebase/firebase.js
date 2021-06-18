import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyCvzp6chpdtkBe46GAkdbhOe8ZIfX-k5GY",
  authDomain: "college-option.firebaseapp.com",
  projectId: "college-option",
  storageBucket: "college-option.appspot.com",
  messagingSenderId: "510123794132",
  appId: "1:510123794132:web:62c1a00f36700ba65ea541",
  measurementId: "G-3PEFGKRCNZ"
  };

 if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)

 const db = firebase.firestore()

 export default db