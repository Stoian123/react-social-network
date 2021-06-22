import React from 'react';
import './Messages.css';

const Messages = (props) => {
  return (
    <div className='messages'>
      <div className='messages-img small-img'></div>
      <span className='message'>{props.message}</span>
    </div>
  )
}

export default Messages;