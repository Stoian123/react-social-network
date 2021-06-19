import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className='post'>
      <div className='post-info'>
        <div className='post-img small-img'></div>
        <span className='post-text'>{ props.message }</span>
      </div>
      <span className='post-likes'>Likes: {props.likeCount}</span>
    </div>
  )
}

export default Post;