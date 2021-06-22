import React from 'react';
import Post from './Post/Post';
import './ProfilePosts.css';

const ProfilePosts = () => {
  const posts = [
    {id:1, message: 'First React Project!', likeCount:10},
    {id:2, message: 'Like pls.', likeCount:33}
  ];

  const postsElements = posts
    .map(p => <Post message={p.message} likeCount={p.likeCount}/>)

  return (
    <div className='profile-posts section'>
      { postsElements }
    </div>
  )
}

export default ProfilePosts;