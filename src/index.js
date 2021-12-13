import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApYevI4m-gyhZ7IKXynLmnmmNGYr6_5vQ",
  authDomain: "searchphotos-7eb6a.firebaseapp.com",
  projectId: "searchphotos-7eb6a",
  storageBucket: "searchphotos-7eb6a.appspot.com",
  messagingSenderId: "51593743579",
  appId: "1:51593743579:web:2593b80753ddc7d4d990fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
