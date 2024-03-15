// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "omars-blog.firebaseapp.com",
  projectId: "omars-blog",
  storageBucket: "omars-blog.appspot.com",
  messagingSenderId: "887049881343",
  appId: "1:887049881343:web:21239880f6c0b091c16eca",
  measurementId: "G-654RWLYCD8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);