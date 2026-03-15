// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5_ZTuru2hqJ6k0jRoasqNS-o2DNBeOMA",
  authDomain: "legit-9770f.firebaseapp.com",
  projectId: "legit-9770f",
  storageBucket: "legit-9770f.firebasestorage.app",
  messagingSenderId: "764816600445",
  appId: "1:764816600445:web:ef0b1e2f483f5c0a85b014",
  measurementId: "G-3NV6EH3MXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
