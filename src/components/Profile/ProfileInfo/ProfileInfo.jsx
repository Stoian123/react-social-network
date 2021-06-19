import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => {
  return (
    <div className='profile-info section'>
      <div className='profile-image'></div>
      <div className='profile-bio'>
        <div className='profile-bio-name'>
          <span>Masha R.</span>
        </div>
        <div className='profile-bio-description'>
          <span className='description'>Date of Birthd: 15 juny</span>
          <span className='description'>City: Kiev</span>
          <span className='description'>Education: DUT</span>
          <span className='description'>Web Site: www.pexels.com</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;