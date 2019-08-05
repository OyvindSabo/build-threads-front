import React from 'react';
import ReactDOM from 'react-dom';
import Profiles from './Profiles';

it('Profiles renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profiles />, div);
  ReactDOM.unmountComponentAtNode(div);
});
