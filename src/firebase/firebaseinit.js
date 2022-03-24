import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCERYN8FbUjKqSzpgr4lMFrHphnVag076w",
  authDomain: "vueblog-6c93f.firebaseapp.com",
  projectId: "vueblog-6c93f",
  storageBucket: "vueblog-6c93f.appspot.com",
  messagingSenderId: "1033307642251",
  appId: "1:1033307642251:web:fc3bb9fc40e29b52bf778e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
const auth = getAuth(app);

export { db };
export { auth };
