import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyBhMexSJL6JVea0VfIlxZyd2HRcY4te1Uk",
    authDomain: "college-option-dev.firebaseapp.com",
    projectId: "college-option-dev",
    storageBucket: "college-option-dev.appspot.com",
    messagingSenderId: "1046952159712",
    appId: "1:1046952159712:web:145b4284dd37a39a2ae385"
  };

 if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)

 const db = firebase.firestore()

 export default db