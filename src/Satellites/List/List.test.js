import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import { StaticRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const data = { params: {id: 1 }};
  const div = document.createElement('div');
  ReactDOM.render(<StaticRouter><List match={data} /></StaticRouter>, div);
});
