import React from 'react';
import { NavLink } from 'react-router-dom';

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
              <li><NavLink to='/profile'>Profile</NavLink></li>
              <li><NavLink to="/dialogs">Dialogs</NavLink></li>
            </ul>
            <ul>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/music">Music</NavLink></li>
            </ul>
            <ul>
              <li><NavLink to="/settings">Settings</NavLink></li>
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