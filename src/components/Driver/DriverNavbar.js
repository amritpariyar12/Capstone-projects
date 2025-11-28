import React from "react";
import './DriverNavbar.css';

function DriverNavbar({ driverName, onLogout }) {
  return (
    <nav className="driver-navbar">
      <h3>Welcome, {driverName}</h3>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
}

export default DriverNavbar;
