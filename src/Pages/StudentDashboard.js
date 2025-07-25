import React from 'react';
import './StudentDashboard.css';

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <h2>📈 My Attendance</h2>
      <div className="attendance-card">
        <p><strong>Date:</strong> 2082/03/20</p>
        <p><strong>Status:</strong> Present</p>
        <p><strong>Time In:</strong> 09:05 AM</p>
        <p><strong>Time Out:</strong> 03:50 PM</p>
      </div>

      <h2>🚌 My Bus Route</h2>
      <div className="bus-info-card">
        <p><strong>Route:</strong> Parasi → Campus</p>
        <p><strong>Estimated Arrival:</strong> 07:55 AM</p>
        <div className="map-placeholder">[Your Bus Map]</div>
        <div className="btn-group">
          <button className="btn btn-primary">Notify Me</button>
          <button className="btn btn-primary">Wait For Me</button>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
