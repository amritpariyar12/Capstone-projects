import React from 'react';
import './Dashboard.css';


// Simulated class-wise data
const classData = {
  BICTE: [
    { semester: '2nd Semester', total: 40, present: 38 },
    { semester: '6th Semester', total: 42, present: 41 },
    { semester: '7th Semester', total: 39, present: 35 },
  ],
  BBA: [
    { semester: '2nd Semester', total: 35, present: 32 },
    { semester: '3rd Semester', total: 37, present: 36 },
    { semester: '6th Semester', total: 40, present: 39 },
    { semester: '7th Semester', total: 38, present: 35 },
  ],
};

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="attendance-summary">
        <h2>Program-wise Attendance Summary</h2>
        {Object.entries(classData).map(([program, semesters]) => (
          <div key={program} className="program-group">
            <h3>{program}</h3>
            {semesters.map((batch, index) => (
              <div className="summary-card" key={index}>
                <strong>{batch.semester}</strong>: 
                <span className="text-total"> Total: {batch.total}</span> |
                <span className="text-present"> Present: {batch.present}</span> |
                <span className="text-absent"> Absent: {batch.total - batch.present}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="bus-tracking-card">
        <h4>Bus Tracking</h4>
        <div className="bus-info-box">
          <p><strong>Estimated Time of Arrival:</strong> 10:05 AM</p>
          <div className="map-placeholder">[Map Placeholder]</div>
        </div>
        <div className="notify-buttons">
          <button className="btn btn-primary">Notify All</button>
          <button className="btn btn-secondary">Send Alert</button>

        </div>
      </div>
    </div>
    
  );
}
export default Dashboard;

