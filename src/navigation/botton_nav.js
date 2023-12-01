import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BottomNavigation() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <div className='d-flex justify-content-between'>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/new_ticket">Make a Ticket</Nav.Link>
              <Nav.Link as={Link} to="/tickets">View Tickets</Nav.Link>
            </div>
            <div className='d-flex justify-content-between'>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default BottomNavigation;