// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQpKVxzK0q9aV31BJNGBa5iKv_x1xyC4s",
  authDomain: "ema-john-simple-48dde.firebaseapp.com",
  projectId: "ema-john-simple-48dde",
  storageBucket: "ema-john-simple-48dde.appspot.com",
  messagingSenderId: "815072426432",
  appId: "1:815072426432:web:7dce49021246734513b025",
  measurementId: "G-QTWQTN7TH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;