
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDExAX0bCqqj1Fxr1y-pP3gmnt2r8t9pFs",
  authDomain: "tiktok-clone-d6e1d.firebaseapp.com",
  projectId: "tiktok-clone-d6e1d",
  storageBucket: "tiktok-clone-d6e1d.appspot.com",
  messagingSenderId: "454690603622",
  appId: "1:454690603622:web:ef8a504f0bacf8dc8023a7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;