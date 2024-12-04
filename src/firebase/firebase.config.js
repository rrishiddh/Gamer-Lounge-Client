// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLhM2D4Dqbid6TzjdqP9nTrVid4UolQaQ",
  authDomain: "assignment10-gamerlounge.firebaseapp.com",
  projectId: "assignment10-gamerlounge",
  storageBucket: "assignment10-gamerlounge.firebasestorage.app",
  messagingSenderId: "657738294469",
  appId: "1:657738294469:web:deb31c51d13f256a9efcac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;