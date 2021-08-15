import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCkDGJNGeK9bTEJRSVYOsb1xOUMpygu_E0",
    authDomain: "whatsapp-mern-clone-ed509.firebaseapp.com",
    projectId: "whatsapp-mern-clone-ed509",
    storageBucket: "whatsapp-mern-clone-ed509.appspot.com",
    messagingSenderId: "919555145892",
    appId: "1:919555145892:web:28cf15b1513f8460f46631"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;