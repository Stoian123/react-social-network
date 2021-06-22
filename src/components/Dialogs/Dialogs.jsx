import React from 'react';
import './Dialogs.css';
import Users from './Users/Users';
import Messages from './Messages/Messages'

const Dialogs = () => {
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

  const usersElements = users
    .map( u => <Users name={u.name} id={u.id}/>)

  const messagesElements = messages
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