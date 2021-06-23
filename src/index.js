import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './components/redux/state';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App state={state} />
  </BrowserRouter>, document.getElementById('root')
);
