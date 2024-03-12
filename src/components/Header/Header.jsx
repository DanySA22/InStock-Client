import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import flixLogo from '../../assets/Logo/InStock-Logo_1x.png';

const Header = () => {
    return (
      <header className="header">
        <div className="header__title header__title--logo">
          <NavLink to="/">
            <img src={flixLogo} alt="BrainFlix Logo" className="header__logo" />
          </NavLink>
        </div>
        <div className="header__actions">
          <div className="header__warehouse">
            <NavLink to="/">
              <button className="header__upload">Warehouse</button>
            </NavLink>
          </div>
  
          <div className="header__inventory">
            <NavLink to="/">
              <button className="header__upload">Inventory</button>
            </NavLink>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;