// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1jXOVYC6PPrLPzAN52_5BG9mMPnWpm0M",
  authDomain: "ai-code-smart.firebaseapp.com",
  projectId: "ai-code-smart",
  storageBucket: "ai-code-smart.appspot.com",
  messagingSenderId: "567344882182",
  appId: "1:567344882182:web:1f3e8742ccca6361c61987",
  measurementId: "G-4LGLDC97Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);