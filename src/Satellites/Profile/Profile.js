import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Profile.css';

class Profile extends Component {

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
          <h1>Satellite Profile Page {this.state.id}</h1>
        </div>
      </Router>
  }

}

export default Profile