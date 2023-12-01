import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
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

return (
  <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/' element={Home}/>
          <Route path='/about' element={About}/>
          <Route path='/services' element={Services}/>
                
          <Route path='/login' element={Login}/>
          <Route path='/signup' element={Signup}/>
                
          <Route path='/new_ticket' element={NewTicket}/>
          <Route exact path='/tickets' element={AllTickets}/>
          <Route path='/ticket/:id' element={Ticket}/>
        </Switch>
        <BottomNavigation/>
      </Router>
  </div>
  )
}

export default App;