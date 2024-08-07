import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWy1wexq1QeqOGY4sy1jG1-hE7C4qvQqg",
  authDomain: "login-practice-b2a29.firebaseapp.com",
  projectId: "login-practice-b2a29",
  storageBucket: "login-practice-b2a29.appspot.com",
  messagingSenderId: "433813457125",
  appId: "1:433813457125:web:b0e40cef35d3ae75c1ac0c",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
