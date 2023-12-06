import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    axios
      .post('http://127.0.0.1:5000/new_user', {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log('Sign-up successful');
          navigate('/login');
        } else {
          setErrorText('Failed to sign up. Please try again.');
        }
      })
      .catch((error) => {
        setErrorText('An error occurred. Please try again.');
      });

    event.preventDefault();
  };

  return (
    <div className="background">
      <div className="signup-container">
        <h1>Sign Up to Make a Ticket</h1>
        <div>{errorText}</div>

        <form onSubmit={handleSubmit} className="auth-form-wrapper">
          <div className="form-group">
            <label htmlFor="name">Your name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Your password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
