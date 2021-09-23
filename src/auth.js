import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
} from "firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDoUSwGE3wxsJphR4xz9pAXV7nb2Qb9l_8",
  authDomain: "gallery-fe09.firebaseapp.com",
  projectId: "gallery-fe09",
  storageBucket: "gallery-fe09.appspot.com",
  messagingSenderId: "749202424007",
  appId: "1:749202424007:web:80c1814749a107eee87ee2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    console.log(error);
  });
};

export const listenToUserChange = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      const uid = user.uid;
    } else {
    }
  });
};

export const signOut = () => fbSignOut(auth);
