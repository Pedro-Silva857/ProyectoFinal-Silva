import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMoR2KCIXmX7xIJ0_REqSJtV6iaKayJU4",
  authDomain: "coder-project-1b5bd.firebaseapp.com",
  projectId: "coder-project-1b5bd",
  storageBucket: "coder-project-1b5bd.appspot.com",
  messagingSenderId: "794886447798",
  appId: "1:794886447798:web:8c27a335821739d0a53c17"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
