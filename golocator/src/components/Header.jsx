import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

const Header = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg  w-100 p-3" style={{ backgroundColor: 'blue' }}>

      <Link to="/" className="navbar-brand">
      GO LOCATOR
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggleCollapse}
        aria-controls="navbarNav"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav" style={{  marginLeft: isCollapsed ? '22rem' : '-5rem'}}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link " style={{  marginLeft: '5rem'}}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link " style={{  marginLeft: '5rem' }}>
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link" style={{  marginLeft: '5rem' }}>
              Signin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
