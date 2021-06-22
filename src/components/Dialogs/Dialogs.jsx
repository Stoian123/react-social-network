import React from 'react';
import './Dialogs.css';
import Users from './Users/Users';
import Messages from './Messages/Messages'

const Dialogs = () => {
  const usersData = [
    {id: 'kendall', name: 'Kendall'},
    {id: 'amanda', name: 'Amanda'},
    {id: 'john', name: 'John'},
    {id: 'jessica', name: 'Jessica'},
    {id: 'emma', name: 'Emma'},
    {id: 'masha', name: 'Masha'},
  ];
  const messagesData = [
    {id:1, message: 'Hi'},
    {id:2, message: 'How are you?'},
    {id:3, message: 'something...'},
    {id:4, message: 'something...'}
  ];

  return (
    <div className='dialogs wrapper'>
      <div className='dialogs-header section'>
        <h1 className='title'>Dialogs</h1>
      </div>

      <div className="dialogs-container section">
        <div className="dialogs-left">
            <Users name={usersData[0].name} id={usersData[0].id}/>
            <Users name={usersData[1].name} id={usersData[1].id}/>
            <Users name={usersData[2].name} id={usersData[2].id}/>
            <Users name={usersData[3].name} id={usersData[3].id}/>
            <Users name={usersData[4].name} id={usersData[4].id}/>
            <Users name={usersData[5].name} id={usersData[5].id}/>
        </div>

        <div className="dialogs-right">
          <Messages message={messagesData[0].message} />
          <Messages message={messagesData[1].message} />
          <Messages message={messagesData[2].message} />
          <Messages message={messagesData[3].message} />
        </div>
      </div>
    </div>
  )
}

export default Dialogs;