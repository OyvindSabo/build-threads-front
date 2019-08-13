import React from 'react';
import ReactDOM from 'react-dom';
import Threads from './Threads';

it('Home renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Threads />, div);
  ReactDOM.unmountComponentAtNode(div);
});
