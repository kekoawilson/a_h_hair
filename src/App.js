import React, { Component } from 'react';
import 'reset-css';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard/Dashboard.js';
import Admin from '../src/components/Admin/Admin.js';
import Header from '../src/components/Header/Header.js';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">

          <Header />
          <Route exact path='/' component={ Dashboard } />
          <Route path='/private' component={ Admin } />

        </div>
      </HashRouter>
    );
  }
}

export default App;
