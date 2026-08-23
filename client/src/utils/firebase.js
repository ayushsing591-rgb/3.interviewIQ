
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-3e76c.firebaseapp.com",
  projectId: "interviewiq-3e76c",
  storageBucket: "interviewiq-3e76c.firebasestorage.app",
  messagingSenderId: "1040510058840",
  appId: "1:1040510058840:web:c590c4b6b3a0b373ea652d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}