// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzpTcSsIMxASTLOre0UlnmqK40YaO9iwg",
    authDomain: "react-context-daisy-router-app.firebaseapp.com",
    projectId: "react-context-daisy-router-app",
    storageBucket: "react-context-daisy-router-app.appspot.com",
    messagingSenderId: "435943395650",
    appId: "1:435943395650:web:d13192c687e96a1025f8db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;