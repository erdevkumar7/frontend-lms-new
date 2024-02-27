import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6S1bACUyfb9t7lQOmH6DHKlkHZmaJf40",
  authDomain: "chat-app-343ed.firebaseapp.com",
  databaseURL: "https://chat-app-343ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-app-343ed",
  storageBucket: "chat-app-343ed.appspot.com",
  messagingSenderId: "51928367649",
  appId: "1:51928367649:web:60718474d2e88c5a871960",
  measurementId: "G-49HHJYZ4T7"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC6S1bACUyfb9t7lQOmH6DHKlkHZmaJf40",
//   authDomain: "chat-app-343ed.firebaseapp.com",
//   databaseURL: "https://chat-app-343ed-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "chat-app-343ed",
//   storageBucket: "chat-app-343ed.appspot.com",
//   messagingSenderId: "51928367649",
//   appId: "1:51928367649:web:60718474d2e88c5a871960",
//   measurementId: "G-49HHJYZ4T7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);