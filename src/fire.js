// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore/lite';

// const firebaseConfig = {
//     apiKey: "AIzaSyAC9AJx9MZg4Xgo-EPiaqw4bcaKmzQGtLw",
//     authDomain: "login-81961.firebaseapp.com",
//     projectId: "login-81961",
//     storageBucket: "login-81961.appspot.com",
//     messagingSenderId: "1035923554454",
//     appId: "1:1035923554454:web:448009d2012d7cf98642b7"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// // export const db = firebase.fireStore();
// export const db = getFirestore(app);
// export default app




import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAC9AJx9MZg4Xgo-EPiaqw4bcaKmzQGtLw",
    authDomain: "login-81961.firebaseapp.com",
    projectId: "login-81961",
    storageBucket: "login-81961.appspot.com",
    messagingSenderId: "1035923554454",
    appId: "1:1035923554454:web:448009d2012d7cf98642b7"
};


const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = app.firestore();

export { db, app }

// const signInWithEmailAndPassword = async (email, password) => {
//     await auth.signInWithEmailAndPassword(email, password);

// }
