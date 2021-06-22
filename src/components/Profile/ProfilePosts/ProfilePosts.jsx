import React from 'react';
import Post from './Post/Post';
import './ProfilePosts.css';

const ProfilePosts = (props) => {
  const postsElements = props.posts
    .map(p => <Post message={p.message} likeCount={p.likeCount}/>)

  return (
    <div className='profile-posts section'>
      { postsElements }
    </div>
  )
}

export default ProfilePosts;