import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumpsterFire } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faDumpsterFire);

const Ticket = () => {
  const [ticket, setTicket] = useState({});
  const [newStatus, setNewStatus] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchTicket = useCallback(async () => {
    try {
      const response = await axios.get(`https://kayleece-backend-5dd949158c3f.herokuapp.com/ticket/${id}`);
      setTicket(response.data);
      console.log("ticket success")
    } catch (error) {
      console.error('Error fetching ticket:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchTicket();
  }, [fetchTicket]);

  const handleStatusChange = async () => {
    if (newStatus) { 
      try {
        await axios.put(`https://kayleece-backend-5dd949158c3f.herokuapp.com/edit_ticket/${id}`, {
          id: ticket.id,
          status: newStatus
        });
        setTicket({ ...ticket, status: newStatus });
      } catch (error) {
        console.error('Error updating status:', error);
      }
    } else {
      alert("Please give a status")
      console.log("error no status given")
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://kayleece-backend-5dd949158c3f.herokuapp.com/delete_ticket/${id}`);
      console.log('Ticket deleted successfully');
      navigate('/tickets')
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  return (
    <div className="ticket-container">
      <div>
        <h1>{ticket.title}</h1>
        <p>Description: {ticket.description}</p>
        <p>Status: {ticket.status}</p>
      </div>
      <div>
        <div className='ticket-options'>
          <p>Update your status below:</p>
          <div className='radio-buttons'>
            <label className='radio-button'>
              <input
                type="radio"
                name="statusOption"
                value="In Progress"
                checked={newStatus === 'In Progress'}
                onChange={() => setNewStatus('In Progress')}
              />
              <span>In Progress</span>
            </label>
            <label className='radio-button'>
              <input
                type="radio"
                name="statusOption"
                value="Finished"
                checked={newStatus === 'Finished'}
                onChange={() => setNewStatus('Finished')}
              />
              <span>Finished</span>
            </label>
          </div>
        </div>
        <div className='ticket-buttons'>
          <button onClick={handleStatusChange}>Update Status</button>
          <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faDumpsterFire} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;