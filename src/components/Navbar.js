import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="navItems">
        <li className="navLinks">
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li className="icon">
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
