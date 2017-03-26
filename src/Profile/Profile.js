import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Store from '../data/user/Store.js';
import './Profile.css';

class Profile extends Component {

  constructor({ match }) {
    super();
    this.state = {
      user: Store.getState()
    };

    this.listener = Store.addListener(() => this.setState({ user: Store.getState() }) );

  }

  storeChanged() {
    this.setState({ user: Store.getState() })
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  render() {
      return <mfs-profile>
        <h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
      </mfs-profile>
  }

}

export default Profile