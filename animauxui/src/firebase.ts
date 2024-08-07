/**
 * 
 * 
 * CODE GÉNÉRÉ PAR FIREBASE.
 * 
 * 
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6jZBzvJx_H4qzgq6ry0rtqtN7UKQs5wU",
  authDomain: "projetpersonnel-2f15f.firebaseapp.com",
  projectId: "projetpersonnel-2f15f",
  storageBucket: "projetpersonnel-2f15f.appspot.com",
  messagingSenderId: "1004600127081",
  appId: "1:1004600127081:web:7e581a437d45fcf0687cf8",
  measurementId: "G-M1KTW6WQMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const logInWithEmailAndPassword = async (
email: string,
password: string
) => {
try {
    await signInWithEmailAndPassword(auth, email, password);
} catch (err: any) {
    console.error(err);
    alert(err.message);
}
};

export const logout = () => {
    signOut(auth);
};