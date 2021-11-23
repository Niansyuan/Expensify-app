import { initializeApp } from 'firebase/app';
import {
    getDatabase,
    ref,
    set,
    remove,
    update,
    get,
    child,
    onValue,
    push,
    onChildRemoved,
    onChildChanged,
    onChildAdded
} from "firebase/database";

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

export default database;