import firebase from 'firebase/app';
import '@firebase/firestore';

 // Your web app's Firebase configuration
 var app = firebase.initializeApp({
    apiKey: "AIzaSyCu_joVz4FIxLlJEHpPh-8pWuKhFyV38Lk",
    authDomain: "karcomputersdb.firebaseapp.com",
    projectId: "karcomputersdb",
    storageBucket: "karcomputersdb.appspot.com",
    messagingSenderId: "59368148173",
    appId: "1:59368148173:web:72821506bdfccb41d46d84"
  });
  // Initialize Firebase
  
  //export 
  const getFirebase = () => {
    return app;    
  }

  //export 
  const getFirestore = () => {
      console.log('ejecutando funcion getFirestore');
      return  firebase.firestore(app);      
  }
  