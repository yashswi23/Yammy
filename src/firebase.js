import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGx_CZokpl5QUjBmDvoZmYfm_vanuKoR4",
  authDomain: "trippipool.firebaseapp.com",
  projectId: "trippipool",
  storageBucket: "trippipool.firebasestorage.app",
  messagingSenderId: "1024578270997",
  appId: "1:1024578270997:web:36b8ce4d706085cbf65b1c",
  measurementId: "G-TTQ860PHVH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider,signInWithPopup};