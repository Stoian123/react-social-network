import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, { subscribe } from './components/redux/state';
import { addPost, updateNewPostText } from './components/redux/state'
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const rerenderEntireTree = (state) => {
  ReactDOM.render (
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>,document.getElementById('root')
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);