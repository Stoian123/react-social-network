import React from 'react';
import './Dialogs.css';
import { NavLink } from 'react-router-dom';
import Users from './Users/Users';

const Dialogs = () => {
  return (
    <div className='dialogs wrapper'>
      <div className='dialogs-header section'>
        <h1 className='title'>Dialogs</h1>
      </div>

      <div className="dialogs-container section">
        <div className="dialogs-left">
          <NavLink to='/dialogs/1'>
            <Users name='Kendall' />
          </NavLink>
          <NavLink to='/dialogs/2'>
            <Users name='Amanda' />
          </NavLink>
          <NavLink to='/dialogs/3'>
            <Users name='John' />
          </NavLink>
          <NavLink to='/dialogs/4'>
            <Users name='Jessica' />
          </NavLink>
          <NavLink to='/dialogs/5'>
            <Users name='Emma' />
          </NavLink>
          <NavLink to='/dialogs/6'>
            <Users name='Masha' />
          </NavLink>
        </div>

        <div className="dialogs-right">

        </div>
      </div>
    </div>
  )
}

export default Dialogs;