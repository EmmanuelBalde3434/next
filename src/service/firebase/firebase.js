// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.ZAPATITOS_API_KEY,
  authDomain: process.env.ZAPATITOS_AUTH_DOMAIN,
  projectId: process.env.ZAPATITOS_PROJECTID,
  storageBucket: process.env.ZAPATITOS_STORAGEBUCKET,
  messagingSenderId: process.env.ZAPATITOS_MESSAGIN_SENDERID,
  appId: process.env.ZAPATITOS_APPID,
  measurementId: process.env.ZAPATITOS_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);