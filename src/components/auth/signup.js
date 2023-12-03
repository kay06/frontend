import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      errorText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  handleSubmit(event) {
    const { name, email, password } = this.state;

    axios
      .post("http://127.0.0.1:5000/new_user", {
        name: name,
        email: email,
        password: password
      })
      .then(response => {
        if (response.status === 200) {
          console.log("Sign-up successful");
        } else {
          this.setState({
            errorText: "Failed to sign up. Please try again."
          });
        }
      })
      .catch(error => {
        this.setState({
          errorText: "An error occurred. Please try again."
        });
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Sign Up to Make a Ticket</h1>

        <div>{this.state.errorText}</div>

        <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;