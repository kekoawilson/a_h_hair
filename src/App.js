import React, { Component } from 'react';
import 'reset-css';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from '../src/components/About/About';
import Admin from '../src/components/Admin/Admin.js';
import Booking from '../src/components/Booking/Booking.js';
import Bridals from '../src/components/Bridals/Bridals';
import Cart from '../src/components/Cart/Cart';
import Dashboard from '../src/components/Dashboard/Dashboard.js';
import MatAppBar from '../src/components/MatUI/MatAppBar';
import Profile from '../src/components/Profile/Profile';
import Shop from '../src/components/Shop/Shop.js';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">

          <MatAppBar/>

          <Route path='/about' component={ About } />
          <Route path='/private' component={ Admin } />
          <Route path='/booking' component={ Booking } />
          <Route path='/bridals' component={ Bridals } />
          <Route path='/cart' component={ Cart } />
          <Route exact path='/' component={ Dashboard } />
          <Route path='/profile' component={ Profile } />
          <Route path='/shop' component={ Shop } />
          

        </div>
      </HashRouter>
    );
  }
}

export default App;
