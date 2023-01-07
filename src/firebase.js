import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//web app firebase's cofig
const firebaseConfig = {
    apiKey: "AIzaSyBnJ294YKPmkaEuqtIDGnOMhEE4V-litVs",
    authDomain: "react-todo-3e07a.firebaseapp.com",
    projectId: "react-todo-3e07a",
    storageBucket: "react-todo-3e07a.appspot.com",
    messagingSenderId: "633137612633",
    appId: "1:633137612633:web:7bf8ba6e2c3e79e41cee48"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };