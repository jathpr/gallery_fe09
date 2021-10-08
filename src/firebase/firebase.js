import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_FB,
  authDomain: "gallery-fe09.firebaseapp.com",
  projectId: "gallery-fe09",
  storageBucket: "gallery-fe09.appspot.com",
  messagingSenderId: "749202424007",
  appId: "1:749202424007:web:80c1814749a107eee87ee2",
};

export const app = initializeApp(firebaseConfig);
