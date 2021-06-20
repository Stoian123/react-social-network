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
            <Users name='Kendall' id='kendall'/>
            <Users name='Amanda' id='Amanda'/>
            <Users name='John' id='John'/>
            <Users name='Jessica' id='Jessica'/>
            <Users name='Emma' id='Emma'/>
            <Users name='Masha' id='Masha'/>
        </div>

        <div className="dialogs-right">

        </div>
      </div>
    </div>
  )
}

export default Dialogs;