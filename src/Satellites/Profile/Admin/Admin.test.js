import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './Admin';

it('renders without crashing', () => {
  const data = { params: {id: 1 }};
  const div = document.createElement('div');
  ReactDOM.render(<Profile match={data} />, div);
});
