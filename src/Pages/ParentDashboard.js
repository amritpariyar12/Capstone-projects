import React from 'react';
import './ParentDashboard.css';

function ParentDashboard() {
  return (
    <div className="parent-dashboard">
      <h2>📈 Children Attendance</h2>
      <div className="attendance-card">
        <p><strong>Name:</strong> Amrit Pariyar</p>
        <p><strong>Class:</strong> BICTE 7th Semester</p>
        <p><strong>Date:</strong> 2082/03/20</p>
        <p><strong>Status:</strong> Present</p>
      </div>

      <h2>🚌 Children Bus Route</h2>
      <div className="bus-info-card">
        <p><strong>Route:</strong> Parasi  → Campus</p>
        <p><strong>Status:</strong> Bus on the way (500m away)</p>
        {/* <div className="map-placeholder">[Bus Tracking Map]</div>
        <div className="btn-group">
          <button className="btn btn-primary">Track Bus</button>
        </div> */}
      </div>
    </div>
  );
}

export default ParentDashboard;
