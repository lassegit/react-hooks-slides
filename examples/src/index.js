import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-enroute';
import UseStateExample from './components/UseStateExample';
import './main.css';

const location = typeof window !== 'undefined' ? window.location.pathname : '/';

ReactDOM.render(
  <Router location={location}>
    <Route path="/" component={UseStateExample} />
  </Router>,
  document.getElementById('root'),
);
