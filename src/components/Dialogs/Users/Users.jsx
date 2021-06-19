import React from 'react';
import './Users.css';

const Users = (props) => {
  return (
    <div className="dialogs-user">
      <div className="dialogs-user-img small-img"></div>
      <span className='dialogs-user-name'>{props.name}</span>
    </div>
  )
}

export default Users;