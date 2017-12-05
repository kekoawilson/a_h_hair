import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard/Dashboard.js';
import Admin from '../src/components/Admin/Admin.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
        
          <Route exact path='/' component={ Dashboard } />
          <Route path='/private' component={ Admin } />

        </div>
      </HashRouter>
    );
  }
}

export default App;
