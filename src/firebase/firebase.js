import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:932632831103:web:0411e86f2983baf14c8b4a",
    measurementId: "G-F6QXG41BRN"
};

// Initialize Firebase---------------------
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

export { googleProvider, app, database as default };