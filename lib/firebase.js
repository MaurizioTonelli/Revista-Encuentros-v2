import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAshDhBasYQ3bUrwhjAgW-Dbi4V1JsL1OY",
  authDomain: "revista-encuentros.firebaseapp.com",
  projectId: "revista-encuentros",
  storageBucket: "revista-encuentros.appspot.com",
  messagingSenderId: "401843786811",
  appId: "1:401843786811:web:2e1019e8ebfa28d574781e",
  measurementId: "G-W4DXTHGTNQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
