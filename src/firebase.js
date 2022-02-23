import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgxXD8-WeXJlYzfufDiYpFumI21mWnPM0",
  authDomain: "linkedin-clone-ec432.firebaseapp.com",
  projectId: "linkedin-clone-ec432",
  storageBucket: "linkedin-clone-ec432.appspot.com",
  messagingSenderId: "977086591232",
  appId: "1:977086591232:web:42d0d70e783e1d746183e5",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };
