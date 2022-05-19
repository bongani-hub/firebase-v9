import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCIsxh9dFk2jc_zOVY7JOfljbI4mk70l9U",
    authDomain: "fir-v9-1ff5b.firebaseapp.com",
    projectId: "fir-v9-1ff5b",
    storageBucket: "fir-v9-1ff5b.appspot.com",
    messagingSenderId: "451570153689",
    appId: "1:451570153689:web:42ba77524473ef5b0766c8",
    measurementId: "G-ELXSQNV9ZY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app