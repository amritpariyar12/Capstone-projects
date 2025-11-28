import React from "react";
import { Outlet } from "react-router-dom"; 
import DriverSidebar from "./DriverSidebar";
import DriverNavbar from "./DriverNavbar";
import './DriverLayout.css';

function DriverLayout({ children, driverName, onLogout }) {
  return (
    <div className="driver-layout">
      <DriverSidebar />
      <div className="driver-main">
        <DriverNavbar driverName={driverName} onLogout={onLogout} />
        <div className="driver-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DriverLayout;
