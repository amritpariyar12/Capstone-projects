import React from "react";
import { NavLink } from "react-router-dom";
import './DriverSidebar.css';

function DriverSidebar() {
  return (
    <div className="driver-sidebar">
      <h2>Driver Menu</h2>
      <NavLink to="/driver/dashboard" className={({ isActive }) => isActive ? "active-link" : ""}>
        Dashboard
      </NavLink>
      <NavLink to="/driver/route" className={({ isActive }) => isActive ? "active-link" : ""}>
        My Bus Route
      </NavLink>
      <NavLink to="/driver/notifications" className={({ isActive }) => isActive ? "active-link" : ""}>
        Notifications
      </NavLink>
      <NavLink to="/driver/profile" className={({ isActive }) => isActive ? "active-link" : ""}>
        Profile
      </NavLink>
    </div>
  );
}

export default DriverSidebar;
