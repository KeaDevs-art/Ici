// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK49aNriSHY1dKBbc4fde5FEdBWwySzno",
  authDomain: "ici-tracker-app.firebaseapp.com",
  projectId: "ici-tracker-app",
  storageBucket: "ici-tracker-app.appspot.com",
  messagingSenderId: "813104391174",
  appId: "1:813104391174:web:4e36c8cad5ff4fd819cf87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const addLocationDataToDatabase = async (lat, lng) => {
  try {
    const docRef = addDoc(collection(db, "userCoordinates"), {
      userLatitude: lat,
      userLongitude: lng,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error adding document", e);
  }
};
