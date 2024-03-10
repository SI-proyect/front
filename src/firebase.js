// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6mYJyOyY1FNFwWjYD5uk0p1yE2D9rdqw",
  authDomain: "app-dian.firebaseapp.com",
  projectId: "app-dian",
  storageBucket: "app-dian.appspot.com",
  messagingSenderId: "931983495911",
  appId: "1:931983495911:web:b3c06a50e8b94c63b48842",
  measurementId: "G-SJ2VD0FSQ6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// const analytics = getAnalytics(app);
