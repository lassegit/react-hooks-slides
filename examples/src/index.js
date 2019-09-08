import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-enroute';
import './main.css';
import UseStateExample from './components/UseStateExample';

const location = typeof window !== 'undefined' ? window.location.pathname : '/';

ReactDOM.render(
  <Router location={location}>
    <Route path="/" component={UseStateExample} />
  </Router>,
  document.getElementById('root')
);
