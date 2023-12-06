import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './navigation/navigation';
import Home from './components/pages/home';
import About from './components/pages/about';
import Services from './components/pages/services';
import NewTicket from './components/tickets/new_ticket';
import AllTickets from './components/tickets/all_tickets';
import Ticket from './components/tickets/ticket';
import Login from './components/auth/login'
import Signup from './components/auth/signup';
import './styles/main.scss'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/tickets'); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/'); 
  };

return (
  <div className="App">
        <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        <Routes>

          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/services' element={<Services/>}/>
                
          <Route path='/login' element={<Login handleLogin={handleLogin}/>}/>
          <Route path='/signup' element={<Signup/>}/>
          {isLoggedIn ? (
            <>
                <Route path='/new_ticket' element={<NewTicket/>}/>
                <Route exact path='/tickets' element={<AllTickets/>}/>
                <Route path='/ticket/:id' element={<Ticket/>}/>
            </>
          ): null}
        
        </Routes>
  </div>
  )
}

export default App;