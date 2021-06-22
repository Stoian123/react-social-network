import React from 'react';
import Post from './Post/Post';
import './ProfilePosts.css';

const ProfilePosts = () => {
  const postsData = [
    {id:1, message: 'First React Project!', likeCount:10},
    {id:2, message: 'Like pls.', likeCount:33}
  ];

  return (
    <div className='profile-posts section'>
      <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
      <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
    </div>
  )
}

export default ProfilePosts;