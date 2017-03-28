import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './About.css';

class About extends Component {

  constructor({ match }) {
    super();
    this.state = {
      path: match.url,
      id  : match.params.id
    };
  }

  render() {
      return <mfs-satellite-about>
          <h1>Satellite About Page {this.state.id}</h1>
        </mfs-satellite-about>
  }

}

export default About