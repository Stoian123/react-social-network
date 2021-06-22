import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

const posts = [
  {id:1, message: 'First React Project!', likeCount:10},
  {id:2, message: 'Like pls.', likeCount:33}
];
const users = [
  {id: 'kendall', name: 'Kendall'},
  {id: 'amanda', name: 'Amanda'},
  {id: 'john', name: 'John'},
  {id: 'jessica', name: 'Jessica'}, 
  {id: 'emma', name: 'Emma'},
  {id: 'masha', name: 'Masha'},
];
const messages = [
  {id:1, message: 'Hi'},
  {id:2, message: 'How are you?'},
  {id:3, message: 'something...'},
  {id:4, message: 'something...'}
];

ReactDOM.render(<App posts={posts} users={users} messages={messages}/>,document.getElementById('root'));
