import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./fire";
import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setlogin] = useState(false);

  const clearAll = () => {
    setEmail("");
    setPassword("");
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      clearAll();
    } catch (error) {
      alert(error);
    }
  };

  const Login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      clearAll();
      alert("hello user");
    } catch (error) {
      alert(error);
    }
  };

  // const logout = () => {
  //   auth.signOut();
  // };

  return (
    <>
      <div className="login-form-container">
        {login ? (
          <h1 className="signUp-heading">SignUp page</h1>
        ) : (
          <h1 className="signUp-heading">Login page</h1>
        )}

        <div className="login-form-container--email">
          <label className="label-style">Email</label>
          <input
            className="input-style"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          ></input>
        </div>
        <div className="login-form-container--password">
          <label className="label-style">passsword</label>
          <input
            className="input-style"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          ></input>
        </div>
        <div className="login-form-container--checkbox">
          <label className="label-style">Remember me</label>
          <input className="check-box" type="checkbox"></input>
        </div>
        <div className="btn-container">
          {login ? (
            <button
              className="signUp-btn"
              onClick={() => signUp(email, password)}
            >
              Register
            </button>
          ) : (
            <button
              className="signUp-btn"
              onClick={() => Login(email, password)}
            >
              Login
            </button>
          )}
          {login ? (
            <h6 onClick={() => setlogin(false)}>
              Already Register?<a href="#">Login</a>
            </h6>
          ) : (
            <h6 onClick={() => setlogin(true)}>
              Create a Account !!!<a href="#">Create Account</a>
            </h6>
          )}
        </div>
      </div>
    </>
  );
};
export default Login;
