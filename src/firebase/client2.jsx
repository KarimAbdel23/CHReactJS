import firebase from 'firebase/app';
import '@firebase/firestore';

 // Your web app's Firebase configuration
 var app = firebase.initializeApp({
    apiKey: "AIzaSyDiNYshhR5D0xCb4VTwEHKZTSU5V5zJ35M",
    authDomain: "karshopch.firebaseapp.com",
    projectId: "karshopch",
    storageBucket: "karshopch.appspot.com",
    messagingSenderId: "761062210885",
    appId: "1:761062210885:web:051764bad4b36acf28522c"
  });
  // Initialize Firebase
  
  export const getFirebase = () => {
    return app;    
  }

  export const getFirestore = () => {
      console.log('ejecutando funcion getFirestore');
      return  firebase.firestore(app);
  }

  export const getDate = () => {
    return firebase.firestore.Timestamp.fromDate(new Date());
  }