import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBR0G85n70sys9nRZ4D0UygQSxxh6fqxiI",
  authDomain: "mi-proyecto-de-react-7292d.firebaseapp.com",
  projectId: "mi-proyecto-de-react-7292d",
  storageBucket: "mi-proyecto-de-react-7292d.appspot.com",
  messagingSenderId: "386981800111",
  appId: "1:386981800111:web:957f527b1ea73cfcb64c5a"
};

const app = initializeApp(firebaseConfig); //Vinculo mi app con Firebase

export const baseDeDatos = getFirestore(app) //Llamo la base de datos que esta en Firebase