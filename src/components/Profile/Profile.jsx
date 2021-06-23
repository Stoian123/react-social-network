import React from 'react';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileAddPosts from './ProfileAddPosts/ProfileAddPosts';
import ProfilePosts from './ProfilePosts/ProfilePosts';

const Profile = (props) => {
  return (
    <div className='profile'>
      <ProfileBackground />
      <div className='wrapper'>
        <ProfileInfo />
        <ProfileAddPosts />
        <ProfilePosts posts={props.state.posts} />
      </div>
    </div>
  )
}

export default Profile;