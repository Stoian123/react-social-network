import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/state';
import './ProfileAddPosts.css';

const ProfileAddPosts = (props) => {
  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
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