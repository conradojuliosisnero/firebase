/* eslint-disable no-unused-vars */
import firebaseApp from "./auth/credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from "react";
import './App.css'

const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUser(usuarioFirebase);
    } else {
      setUser(null);
    }
  });

  return <>{user ? <Home correoUsuario={user.email}/> : <Login />}</>;
}

export default App;
