import React from 'react';
import './Dialogs.css';
import Users from './Users/Users';

const Dialogs = () => {
  return (
    <div className='dialogs wrapper'>
      <div className='dialogs-header section'>
        <h1 className='title'>Dialogs</h1>
      </div>

      <div className="dialogs-container section">
        <div className="dialogs-left">
          <Users name='Masha' />
          <Users name='Kendall' />
          <Users name='Amanda' />
          <Users name='John' />
          <Users name='Jessica' />
          <Users name='Emma' />
        </div>

        <div className="dialogs-right">

        </div>
      </div>
    </div>
  )
}

export default Dialogs;