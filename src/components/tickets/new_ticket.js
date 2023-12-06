import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const NewTicket = () => {
  const [ticketDetails, setTicketDetails] = useState({
    phone_number: "",
    title: "",
    description: ""
  });
  const navigate = useNavigate();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setTicketDetails({ ...ticketDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, description } = ticketDetails;

    axios
      .post("http://127.0.0.1:5000/new_ticket", {
        user_id: "1",
        title: title,
        description: description
      })
      .then((response) => {
        console.log("Ticket created:", response.data);
        navigate('/tickets')
      })
      .catch((error) => {
        console.error("Error creating ticket:", error);
      });
  };

  return (
    <div className="new-ticket-container">
      <h1>Create a New Ticket</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={ticketDetails.title}
            onChange={handleChange}
            className="ticket-input"
          />
        </div>

        <div>
          <textarea
            name="description"
            placeholder="Description"
            value={ticketDetails.description}
            onChange={handleChange}
            className="ticket-textarea"
          />
        </div>

        <button type="submit" className="create-ticket-btn">
          Create Ticket
        </button>
      </form>
    </div>
  );
};

export default NewTicket;
