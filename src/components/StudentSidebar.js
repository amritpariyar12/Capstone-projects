import React from 'react';
import { Link } from 'react-router-dom';
import './StudentSidebar.css';
import { NavLink } from 'react-router-dom';

function StudentSidebar( { onLogout }) {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            🏠 Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/myattendance" className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            📂 My Attendance
          </NavLink>
        </li>
        <li>
          <NavLink to="/mybus" className={({ isActive }) => isActive ? 'active-link' : 'link'}>
            🚌 My Bus Route
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

export default StudentSidebar;