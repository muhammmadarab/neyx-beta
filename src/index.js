import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBUbOeyfipX5JFkqEGUWba8DXme7Lr0ru0",
//   authDomain: "neyx-3eacb.firebaseapp.com",
//   projectId: "neyx-3eacb",
//   storageBucket: "neyx-3eacb.appspot.com",
//   messagingSenderId: "1063807547936",
//   appId: "1:1063807547936:web:ff75f7e516772300529a45",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
