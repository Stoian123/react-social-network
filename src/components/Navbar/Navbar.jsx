import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='page-right'>
      <div className='navbar-wrapper'>
        <div className="navbar">
          <div className="navbar-logo">
            <span className='navbar-logo-text'>SN</span>
          </div>
          <nav className='menu'>
            <ul>
              <li><a className='active' href="#">Profile</a></li>
              <li><a href="#">Message</a></li>
            </ul>
            <ul>
              <li><a href="#">News</a></li>
              <li><a href="#">Music</a></li>
            </ul>
            <ul>
              <li><a href="#">Settings</a></li>
            </ul>
          </nav>
        </div>
        <div className='navbar-message'>
          <span className='navbar-message-text'>First React Project</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;