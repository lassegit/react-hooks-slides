import React from 'react';
import ReactDOM from 'react-dom';
import UseStateExample from './UseStateExample';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UseStateExample />, div);
  ReactDOM.unmountComponentAtNode(div);
});
