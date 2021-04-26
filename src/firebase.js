import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDxIKXLca37LZ7itEv3T_1jCifqSYxzSw",
    authDomain: "credo-cal.firebaseapp.com",
    projectId: "credo-cal",
    storageBucket: "credo-cal.appspot.com",
    messagingSenderId: "972738918210",
    appId: "1:972738918210:web:35017cdf788119609c7adb",
    measurementId: "G-8GZYX51RTV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;