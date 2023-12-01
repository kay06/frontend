import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Ticket = () => {
  const [ticket, setTicket] = useState({});
  const [newStatus, setNewStatus] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetchTicket();
  });

  const fetchTicket = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/ticket/${id}`);
      setTicket(response.data);
    } catch (error) {
      console.error('Error fetching ticket:', error);
    }
  };

  const handleStatusChange = async () => {
    try {
      await axios.put(`http://127.0.0.1:5000/edit_ticket`, {
        id: ticket.id,
        status: newStatus,
      });
      setTicket({ ...ticket, status: newStatus });
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="ticket-container">
      <h1>{ticket.title}</h1>
      <p>Description: {ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <div>
        <input
          type="text"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        />
        <button onClick={handleStatusChange}>Update Status</button>
      </div>
    </div>
  );
};

export default Ticket;
