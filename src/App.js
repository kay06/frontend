import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navigation from './navigation/navigation';
import Home from './components/pages/home';
import About from './components/pages/about';
import Services from './components/pages/services';
import NewTicket from './components/tickets/new_ticket';
import AllTickets from './components/tickets/all_tickets';
import Ticket from './components/tickets/ticket';
import Login from './components/auth/login'
import Signup from './components/auth/signup';
import BottomNavigation from './navigation/botton_nav';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

return (
  <div className="App">
      <Router>
        <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        <Routes>

          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/services' element={<Services/>}/>
                
          <Route path='/login' element={<Login handleLogin={handleLogin} />}/>
          <Route path='/signup' element={<Signup/>}/>
          </Routes>
          {isLoggedIn ? (
            <>
              <Routes>
                <Route path='/new_ticket' element={<NewTicket/>}/>
                <Route exact path='/tickets' element={<AllTickets/>}/>
                <Route path='/ticket/:id' element={<Ticket/>}/>
              </Routes>
            </>
          ) : (
            <Navigate to="/login" />
          )}
        
        <BottomNavigation/>
      </Router>
  </div>
  )
}

export default App;