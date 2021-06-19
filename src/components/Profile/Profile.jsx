import React from 'react';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileAddPosts from './ProfileAddPosts/ProfileAddPosts';
import ProfilePosts from './ProfilePosts/ProfilePosts';

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileBackground />
      <div className='wrapper'>
        <ProfileInfo />
        <ProfileAddPosts />
        <ProfilePosts />
      </div>
    </div>
  )
}

export default Profile;