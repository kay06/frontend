import React, { Component } from "react";
import axios from "axios";

class NewTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone_number: "",
      title: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title, description } = this.state;

    axios
      .post("http://127.0.0.1:5000/new_ticket", {
        user_id: "1",
        title: title,
        description: description
      })
      .then(response => {
        console.log("Ticket created:", response.data);
      })
      .catch(error => {
        console.error("Error creating ticket:", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Create a New Ticket</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <textarea
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Create Ticket</button>
        </form>
      </div>
    );
  }
}

export default NewTicket;
