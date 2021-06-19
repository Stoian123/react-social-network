import React from 'react';
import './Dialogs.css';

const Dialogs = () => {
  return (
    <div className='dialogs wrapper'>
      <div className='dialogs-header section'>
        <h1 className='dialogs-title'>Dialogs</h1>
      </div>

      <div className="dialogs-container section">
        <div className="dialogs-left">

          <div className="dialogs-user">
            <div className="dialogs-user-img small-img"></div>
            <span className='dialogs-user-name'>Masha</span>
          </div>

          <div className="dialogs-user">
            <div className="dialogs-user-img small-img"></div>
            <span className='dialogs-user-name'>Kendall</span>
          </div>

          <div className="dialogs-user">
            <div className="dialogs-user-img small-img"></div>
            <span className='dialogs-user-name'>Amanda</span>
          </div>

          <div className="dialogs-user">
            <div className="dialogs-user-img small-img"></div>
            <span className='dialogs-user-name'>John</span>
          </div>

          <div className="dialogs-user">
            <div className="dialogs-user-img small-img"></div>
            <span className='dialogs-user-name'>Jessica</span>
          </div>

          <div className="dialogs-user">
            <div className="dialogs-user-img small-img"></div>
            <span className='dialogs-user-name'>Emma</span>
          </div>
          
        </div>

        <div className="dialogs-right">

        </div>
      </div>
    </div>
  )
}

export default Dialogs;