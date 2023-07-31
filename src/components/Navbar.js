import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import './styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="navItems">
        <li className={splitLocation[1] === '' ? 'active' : ''}>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li className={splitLocation[1] === 'missions' ? 'active' : ''}>
          <NavLink to="/missions" className="icon">Missions</NavLink>
        </li>
        <li className={splitLocation[1] === 'profile' ? 'active' : ''}>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
