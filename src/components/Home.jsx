/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../auth/credentials";

const auth = getAuth(firebaseApp);

export default function Home({ correoUsuario }) {
  return (
    <div>
      <h1>Home</h1>
      <p>welcome {correoUsuario}</p>
      <p>This is the Home Page</p>

      <div>
      <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}
