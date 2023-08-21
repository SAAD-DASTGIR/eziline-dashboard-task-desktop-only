import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    // Add your authentication logic here
  };

  return (
    <div className="login">
       
        
    <div className="login-container">
        
      <h2 className="login-heading">Login</h2>
      <div className="input-container">
        <input
        className="input"
          type="email"
          placeholder="Enter your email Address"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="input-container">
        <input
            className="input"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <Link to ="/dashboard">
      <button className="signin-button" onClick={handleSignIn}>
        Sign In
      </button>
      </Link>
    </div>
    <img className="img" src="login.jpg"  />
    </div>
  );
};

export default Login;
