// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWW-1yV7CFqLQme8CxwplEEzx7lH1GGxM",
  authDomain: "genius-car-services-f5289.firebaseapp.com",
  projectId: "genius-car-services-f5289",
  storageBucket: "genius-car-services-f5289.appspot.com",
  messagingSenderId: "1069840680611",
  appId: "1:1069840680611:web:9d249036ea8e149b162116"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;