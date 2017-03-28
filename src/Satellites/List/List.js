import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './List.css';
import Store from '../../data/stores/Satellites.js';

const List = () => (
  <mfs-satellite-list>
    <h1>Satellite List Page</h1>
    <ul>
      <li><Link to='/satellites/1'>One</Link></li>
      <li><Link to='/satellites/2'>Two</Link></li>
      <li><Link to='/satellites/3'>Three</Link></li>
    </ul>
  </mfs-satellite-list>
);
export default List;