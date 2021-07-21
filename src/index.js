import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './components/redux/state';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const rerenderEntireTree = (state) => {
  ReactDOM.render (
    <BrowserRouter>
      <App state={state} 
        dispatch={store.dispatch.bind(store)}
        store={store} 
      />
    </BrowserRouter>,document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);