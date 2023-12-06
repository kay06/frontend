import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  return (
    <div className="all-tickets-container">
      <h1>All Tickets</h1>
      <div className="ticket-grid">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="ticket">
            <Link to={`/ticket/${ticket.id}`} className="ticket-link">
              <p>ID: {ticket.id}</p>
              <p>Title: {ticket.title}</p>
              <p>Description: {ticket.description}</p>
              <p>Status: {ticket.status}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTickets;
