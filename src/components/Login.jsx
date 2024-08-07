/* eslint-disable no-unused-vars */
import { useState } from "react";
import firebaseApp from "../auth/credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

export default function Login() {
  const [registrando, setRegistrando] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
    };
  async function handlerSubmit (e) {
    e.preventDefault();
    if (registrando) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          setError(true);
          console.log(error);
          throw new Error(error);
        });
    }
  }


  return (
    <div className="container">
      <div className="row">
        {/* colomna mas pequeña */}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Login"
                className="estilo-profile"
              />
              <form onSubmit={handlerSubmit}>
                {error && <div className="alert alert-danger">este correo ya esta en uso</div>}
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="cajatexto"
                  onChange={handlerEmail}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="cajatexto"
                  onChange={handlerPassword}
                />
                <button type="submit" className="btn-form">
                  {registrando ? "Registrarse" : "Iniciar Sesion"}
                </button>
              </form>
              <h4 className="texto">
                {registrando
                  ? "Ya tienes una cuenta?"
                  : "No tienes una cuenta?"}
                <button
                  className="btnswich"
                  onClick={() => setRegistrando(!registrando)}
                >
                  {registrando ? "Iniciar Sesion" : "Registrarse"}
                </button>
              </h4>
            </div>
          </div>
        </div>
        {/* colomna mas grande */}
        <div className="col-md-8">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="tamañoImagen"
          />
        </div>
      </div>
    </div>
  );
}
