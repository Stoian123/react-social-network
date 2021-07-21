import React from 'react';
import './ProfileAddPosts.css';

const ProfileAddPosts = (props) => {
  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text
    }
    props.dispatch(action);
  };


  return (
    <div className='profile-add-posts section'>
      <h1 className='profile-title'>My Posts</h1>
      <div className='profile-form-add'>
        <input className='profile-input' type="text" placeholder='Your news...'
          ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
        <button className='profile-button' onClick={addPost}>Send</button>
      </div>
    </div>
  )
}

export default ProfileAddPosts;