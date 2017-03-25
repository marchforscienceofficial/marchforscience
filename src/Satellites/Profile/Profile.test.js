import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

it('renders without crashing', () => {
  const data = { params: {id: 1 }};
  const div = document.createElement('div');
  ReactDOM.render(<Profile match={data} />, div);
});
