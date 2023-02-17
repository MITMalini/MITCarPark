import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCrx9qo1deCjw14Mn6JL3z1-FLrW2U7cM",
  authDomain: "mit-car-park-37412.firebaseapp.com",
  databaseURL: "https://mit-car-park-37412-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mit-car-park-37412",
  storageBucket: "mit-car-park-37412.appspot.com",
  messagingSenderId: "219718620785",
  appId: "1:219718620785:web:8d8afc8c38ead1faa56dd0",
  measurementId: "G-EZ480WTPVH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }