import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../pictures/navigation/catLogo.jpg';

function Navigation({ isLoggedIn, handleLogout }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Your Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className={`me-auto navbar-nav left-items`}>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          {isLoggedIn && (
            <>
              <Nav.Link as={Link} to="/new_ticket">Make a Ticket</Nav.Link>
              <Nav.Link as={Link} to="/tickets">View Tickets</Nav.Link>
            </>
          )}
        </Nav>
        <Nav className={`navbar-nav right-items`}>
          {!isLoggedIn ? (
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </>
          ) : (
            <Button variant="outline-light" onClick={handleLogout} className="logout-button">Logout</Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
