import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Admin.css';

class Admin extends Component {

  constructor({ match }) {
    super();
    this.state = {
      path: match.url,
      id  : match.params.id
    };
  }

  render() {
      return <mfs-satellite-admin>
          <h1>Satellite Admin Page {this.state.id}</h1>
        </mfs-satellite-admin>
  }

}

export default Admin