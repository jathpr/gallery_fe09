import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-..

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoUSwGE3wxsJphR4xz9pAXV7nb2Qb9l_8",
  authDomain: "gallery-fe09.firebaseapp.com",
  projectId: "gallery-fe09",
  storageBucket: "gallery-fe09.appspot.com",
  messagingSenderId: "749202424007",
  appId: "1:749202424007:web:80c1814749a107eee87ee2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
