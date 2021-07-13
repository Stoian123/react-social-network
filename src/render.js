import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateNewPostText } from './components/redux/state'
import { BrowserRouter } from 'react-router-dom';

export const rerenderEntireTree = (state) => {
  ReactDOM.render (
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>,document.getElementById('root')
  );
}