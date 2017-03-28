import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Profile.css';
import Admin from './Admin/Admin.js';
import About from './About/About.js';

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
        <mfs-satellite-profile>
          <nav>
            <ul>
              <li><Link to={`/satellites/${this.state.id}/about`}>About</Link></li>
              <li><Link to={`/satellites/${this.state.id}/admin`}>Admin</Link></li>
            </ul>
          </nav>
          <h1>Satellite Profile Page {this.state.id}</h1>
          <section>
            <Route path={`${this.state.path}/about`} component={About} />
            <Route path={`${this.state.path}/admin`} component={Admin} />
          </section>
        </mfs-satellite-profile>
      </Router>
  }

}

export default Profile