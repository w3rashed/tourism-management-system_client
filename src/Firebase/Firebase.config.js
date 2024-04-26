// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyCKCJRDdsEBkw3q0GvZN9aYc3cVU7iZkUk",
//   authDomain: "discover-haven.firebaseapp.com",
//   projectId: "discover-haven",
//   storageBucket: "discover-haven.appspot.com",
//   messagingSenderId: "398224921103",
//   appId: "1:398224921103:web:eb5d8b58260664064b097a",
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
