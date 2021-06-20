import React from 'react';
import { NavLink } from 'react-router-dom';
import './Users.css';

const Users = (props) => {
  return (
    <NavLink to={'/dialogs/' +  props.id}>
      <div className="dialogs-user">
        <div className="dialogs-user-img small-img"></div>
        <span className='dialogs-user-name'>{props.name}</span>
      </div>
    </NavLink>
  )
}

export default Users;