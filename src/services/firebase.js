// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmuE-egTR77hvIIBtworZok8miOSXt1UE",
  authDomain: "vote-on-me.firebaseapp.com",
  projectId: "vote-on-me",
  storageBucket: "vote-on-me.appspot.com",
  messagingSenderId: "575227469834",
  appId: "1:575227469834:web:36b27cd37e662916d0bff3",
  measurementId: "G-4HM26MX5VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);