import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (event) => {

    axios
      .post("http://127.0.0.1:5000/new_user", {
        name: name,
        email: email,
        password: password
      })
      .then(response => {
        if (response.status === 200) {
          console.log("Sign-up successful");
          navigate('/login');
        } else {
          setErrorText("Failed to sign up. Please try again.");
        }
      })
      .catch(error => {
        setErrorText("An error occurred. Please try again.");
      });

    event.preventDefault();
  }

  return (
    <div>
      <h1>Sign Up to Make a Ticket</h1>

      <div>{errorText}</div>

      <form onSubmit={handleSubmit} className="auth-form-wrapper">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="btn" type="submit">
        Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;