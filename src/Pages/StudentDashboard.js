import React from 'react';
import './StudentDashboard.css';

function StudentDashboard() {
  const today = "Shrawan 13, 2082";  // You can make this dynamic later

  return (
    <div className="student-dashboard">
      <h2>Today's Summary</h2>

      <div className="dashboard-summary-cards">
        <div className="summary-card">
          <h3>📅 Date</h3>
          <p>{today}</p>
        </div>

        <div className="summary-card">
          <h3>✅ Attendance</h3>
          <p>Status: Present</p>
          <p>Time In: 09:05 AM</p>
          <p>Time Out: 03:50 PM</p>
        </div>

        <div className="summary-card">
          <h3>🚌 Bus Info</h3>
          <p>Route: Parasi → Campus</p>
          <p>Estimated Arrival: 10:15 AM</p>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;

