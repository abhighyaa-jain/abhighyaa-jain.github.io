import React from "react";
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className="navBar">
      <Link to="/bookings/pending">
        <h2 className="logo">CheckIn Simply!</h2>
      </Link>
      <Link to="/hotel-settings" className="nav-links">
        Hotels Settings
      </Link>
      <Link to="/bookings/pending" className="nav-links">Dashboard</Link>
      <hr/>
    </div>
  );
};
export default Header;
