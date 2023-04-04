//
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_TW1bFBG0Oqeg0hynezXuS2PR-SnK_zU",
  authDomain: "finalreactenzof.firebaseapp.com",
  projectId: "finalreactenzof",
  storageBucket: "finalreactenzof.appspot.com",
  messagingSenderId: "478200303553",
  appId: "1:478200303553:web:70f2ac772e4bf3bb2c6940",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
