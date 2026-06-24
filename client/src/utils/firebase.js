import { getAuth, GoogleAuthProvider } from "firebase/auth";


import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterview-3bc20.firebaseapp.com",
  projectId: "aiinterview-3bc20",
  storageBucket: "aiinterview-3bc20.firebasestorage.app",
  messagingSenderId: "70097678949",
  appId: "1:70097678949:web:3408cd7dfe9ff9ac490c8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}