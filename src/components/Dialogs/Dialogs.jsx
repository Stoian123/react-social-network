import React from 'react';
import './Dialogs.css';
import Users from './Users/Users';
import Messages from './Messages/Messages'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogs-reducer';

const Dialogs = (props) => {
  const state = props.store.getState().dialogsPage;

  const usersElements = state.users
    .map( u => <Users name={u.name} id={u.id}/>);
  const messagesElements = state.messages
    .map( m => <Messages message={m.message} />);

  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  const onNewMessageChange = e => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

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
          <div>
            { messagesElements }
          </div>
          <div className="dialogs-form">
            <input value={newMessageBody} type="text" 
              placeholder='Your message...'
              onChange={onNewMessageChange}
            />
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;