import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import flixLogo from "../../assets/Logo/InStock-Logo_1x.png";

const Header = () => {
  // State to manage active button
  const [activeButton, setActiveButton] = useState("warehouse"); // Default to 'warehouse'

  return (
    <header className="header">
      <div className="header__border">  
      <div className="header__title header__title--logo">
        <NavLink to="/">
          <img src={flixLogo} alt="BrainFlix Logo" className="header__logo" />
        </NavLink>
      </div>
      <div className="header__actions">
        <div className="header__warehouse">
          <NavLink to="/">
            <button
              className={`header__button ${
                activeButton === "warehouse" ? "header__button--active" : ""
              }`}
              onClick={() => setActiveButton("warehouse")}
            >
              Warehouse
            </button>
          </NavLink>
        </div>
        <div className="header__inventory">
          <NavLink to="/inventory">
            <button
              className={`header__button ${
                activeButton === "inventory" ? "header__button--active" : ""
              }`}
              onClick={() => setActiveButton("inventory")}
            >
              Inventory
            </button>
          </NavLink>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
