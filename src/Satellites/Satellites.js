import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Satellites.css';

import List from './List/List.js';
import Profile from './Profile/Profile.js';

class Satellites extends Component {

  constructor({ match }) {
    super();
    this.state = {
      path: match.url,
      id  : match.params.id
    };
  }

  render() {
      return <Router>
        <div>
          <h1>Satellite Page {this.state.id}</h1>

          <main>
            <Route exact path={`${this.state.path}/`} component={List} />
            <Route path={`${this.state.path}/:id`} component={Profile} />
          </main>
        </div>
      </Router>
  }

}

export default Satellites