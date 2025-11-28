import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { NavLink } from 'react-router-dom';


function Sidebar({ onLogout }) {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            🏠 Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/st-attendance" className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            📂 Student Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/bustracking" className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            🚌 Bus Tracking
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            📊 Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            ⚙️ Settings
          </NavLink>
        </li>
         <li>
          {/* <NavLink to="/logout" className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            🚪 Logout
          </NavLink> */}
          <button className="logout-button" onClick={onLogout}>
            🚪 Logout
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
