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
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <Link to={`/ticket/${ticket.id}`}>
              <p>id: {ticket.id}</p>
              <p>Title: {ticket.title}</p>
            </Link>
              <p>Description: {ticket.description}</p>
              <p>Status: {ticket.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTickets;
