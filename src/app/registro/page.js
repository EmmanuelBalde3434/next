'use client'
import { useState } from "react";
import "./registro.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Registro() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          value={state.email}
          type="text"
          placeholder="email"
        />

        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="123456"
        />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
