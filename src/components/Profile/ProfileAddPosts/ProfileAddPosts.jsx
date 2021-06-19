import React from 'react';
import './ProfileAddPosts.css';

const ProfileAddPosts = () => {
  return (
    <div className='profile-add-posts section'>
      <h1 className='profile-title'>My Posts</h1>
      <div className='profile-form-add'>
        <input className='profile-input' type="text" placeholder='Your news...' />
        <button className='profile-button'>Send</button>
      </div>
    </div>
  )
}

export default ProfileAddPosts;