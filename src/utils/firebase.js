// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1EKJXZvhQU1G4q9VmPl0UZdSzjwmTlQk",
  authDomain: "ytube-f9e58.firebaseapp.com",
  projectId: "ytube-f9e58",
  storageBucket: "ytube-f9e58.firebasestorage.app",
  messagingSenderId: "156177678040",
  appId: "1:156177678040:web:40243ecb2c1e523276e1ad",
  measurementId: "G-SLTDW5YR7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);