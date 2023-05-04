// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdZaQEsohTxQAaQowApS1Rc2cDTph3fmU",
  authDomain: "chef-vibes.firebaseapp.com",
  projectId: "chef-vibes",
  storageBucket: "chef-vibes.appspot.com",
  messagingSenderId: "45483934860",
  appId: "1:45483934860:web:1c831d581d9b9c219e67a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;