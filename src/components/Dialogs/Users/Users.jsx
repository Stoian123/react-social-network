import React from 'react';
import { NavLink } from 'react-router-dom';
import './Users.css';

const Users = (props) => {
  let path = '/dialogs/' + props.id;
  
  return (
    <NavLink to={path}>
      <div className="dialogs-user">
        <div className="dialogs-user-img small-img"></div>
        <span className='dialogs-user-name'>{props.name}</span>
      </div>
    </NavLink>
  )
}

export default Users;