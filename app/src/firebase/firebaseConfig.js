import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCg3uVLkz73BSVxKWkAS7h1GSqq5PDN_9s",
  authDomain: "noties-project.firebaseapp.com",
  projectId: "noties-project",
  storageBucket: "noties-project.appspot.com",
  messagingSenderId: "770903646645",
  appId: "1:770903646645:web:82122bdf88a0bfac7ff9fc",
  measurementId: "G-PZ5JLB1MLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app); 
export let db = getFirestore(app); 