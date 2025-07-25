import React from 'react';
import { Link } from 'react-router-dom';
import './ParentSidebar.css';
import { NavLink } from 'react-router-dom';

function ParentSidebar( {onLogout }) {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            🏠 Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/attendance" className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            📈 Children Attendance
          </NavLink>
        </li>
        <li>
          <NavLink to="/bus" className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            🚌 Children Bus Route
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            👤 Profile
          </NavLink>
        </li>
         <li>
          <button className="logout-button" onClick={onLogout}>
            🚪 Logout
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default ParentSidebar;