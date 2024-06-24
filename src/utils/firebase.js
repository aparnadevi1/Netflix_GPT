// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSrdwguZ_THscjuZW9H0AI3ak4pviXQT8",
  authDomain: "netflixgpt-dac85.firebaseapp.com",
  projectId: "netflixgpt-dac85",
  storageBucket: "netflixgpt-dac85.appspot.com",
  messagingSenderId: "188965941758",
  appId: "1:188965941758:web:fcf52b947c54e011f910af",
  measurementId: "G-7NSW3WQMYF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
