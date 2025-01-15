import React from 'react';
// Import a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src=""
          alt="YouTube Logo"
          className="logo"
        />
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
      </div>
    </nav>
  );
};

export default Navbar;
