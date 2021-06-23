import React from 'react';
import './Dialogs.css';
import Users from './Users/Users';
import Messages from './Messages/Messages'

const Dialogs = (props) => {
  const usersElements = props.state.users
    .map( u => <Users name={u.name} id={u.id}/>)
  const messagesElements = props.state.messages
    .map( m => <Messages message={m.message} />)

  return (
    <div className='dialogs wrapper'>
      <div className='dialogs-header section'>
        <h1 className='title'>Dialogs</h1>
      </div>
      <div className="dialogs-container section">
        <div className="dialogs-left">
          { usersElements }
        </div>
        <div className="dialogs-right">
          { messagesElements }
        </div>
      </div>
    </div>
  )
}

export default Dialogs;