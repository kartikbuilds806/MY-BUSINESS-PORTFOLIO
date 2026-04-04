import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Analytics not strictly req'd for DB context, but kept optional if needed

const firebaseConfig = {
  apiKey: "AIzaSyBtbwWUcFncO6ZPLuCM4Z-ip2IexiTZvRM",
  authDomain: "primeforge-db.firebaseapp.com",
  projectId: "primeforge-db",
  storageBucket: "primeforge-db.firebasestorage.app",
  messagingSenderId: "41987738294",
  appId: "1:41987738294:web:9128912e19e3ee3a773417",
  measurementId: "G-M1QKFJPT7D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
