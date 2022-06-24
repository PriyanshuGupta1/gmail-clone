import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUqOAS87Jib1l_4QMKEqCiBRQdGbo0Y6M",
    authDomain: "clone-d22e6.firebaseapp.com",
    projectId: "clone-d22e6",
    storageBucket: "clone-d22e6.appspot.com",
    messagingSenderId: "642472068524",
    appId: "1:642472068524:web:3efb5151289fc720066609",
    measurementId: "G-BW2FM1XX9Q"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore(firebaseApp);
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider};
