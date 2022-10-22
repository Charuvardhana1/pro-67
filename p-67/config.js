import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0VCMtKIuTjsdUx5i4wAg2ZyDg8fFVwRM",
    authDomain: "c-67-c498e.firebaseapp.com",
    projectId: "c-67-c498e",
    storageBucket: "c-67-c498e.appspot.com",
    messagingSenderId: "993198819860",
    appId: "1:993198819860:web:4e82f084910511273f3501"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();