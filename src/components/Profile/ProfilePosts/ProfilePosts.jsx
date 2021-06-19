import React from 'react';
import Post from './Post/Post';
import './ProfilePosts.css';

const ProfilePosts = () => {
  return (
    <div className='profile-posts section'>
      <Post message='First React Project!' likeCount='10' />
      <Post message='Like pls.' likeCount='33' />
    </div>
  )
}

export default ProfilePosts;