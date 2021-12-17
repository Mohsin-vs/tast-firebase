import React from "react";
const SignUp = () => {
  return (
    <>
      <h3>SignUp Here </h3>
      <div className="login-form-container">
        <form>
          <div className="login-form-container--email">
            <label className="label-style">Email</label>
            <input className="input-style" placeholder="email" required></input>
          </div>
          <div className="login-form-container--password">
            <label className="label-style">passsword</label>
            <input
              className="input-style"
              placeholder="password"
              required
            ></input>
          </div>
          <div className="login-form-container--checkbox">
            <label className="label-style">Remember me</label>
            <input className="input-style" type="checkbox" required></input>
          </div>
          <input type="submit" value="Submit" className="submit-btn"></input>
        </form>
      </div>
    </>
  );
};
export default SignUp;
