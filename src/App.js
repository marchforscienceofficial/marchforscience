import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Index from './Index/Index.js';
import Satellites from './Satellites/Satellites.js';
import Profile from './Profile/Profile.js';

import Login from './shared/Login/Login.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/satellites">Satellites</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </nav>

          <Login/>

          <main>
            <Route exact path='/' component={Index} />
            <Route path='/satellites' component={Satellites} />
            <Route path='/profile' component={Profile} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
