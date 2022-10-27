import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket, 
  messagingSenderId: process.env.REACT_APP_messagingSenderId, 
  appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig); //Vinculo mi app con Firebase

export const baseDeDatos = getFirestore(app) //Llamo la base de datos que esta en Firebase