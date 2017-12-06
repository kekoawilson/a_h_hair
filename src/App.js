import React, { Component } from 'react';
import 'reset-css';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard/Dashboard.js';
import Admin from '../src/components/Admin/Admin.js';
import Booking from '../src/components/Booking/Booking.js';
import Shop from '../src/components/Shop/Shop.js';
// import Header from '../src/components/Header/Header.js';
import MatAppBar from '../src/components/MatAppBar/MatAppBar';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">

          <MatAppBar/>

          <Route path='/private' component={ Admin } />
          <Route path='/booking' component={ Booking } />
          <Route path='/shop' component={ Shop } />
          <Route exact path='/' component={ Dashboard } />
          

        </div>
      </HashRouter>
    );
  }
}

export default App;
