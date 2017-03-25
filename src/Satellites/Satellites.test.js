import React from 'react';
import ReactDOM from 'react-dom';
import Satellites from './Satellites';

it('renders without crashing', () => {
  const data = { params: {id: 1 }};
  const div = document.createElement('div');
  ReactDOM.render(<Satellites match={data} />, div);
});
