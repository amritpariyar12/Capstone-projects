import React from "react";
import "./Dashboard.css";


// Dummy data for summary
const classData = {
  BICTE: [
    { semester: "2nd Semester", total: 40, present: 38 },
    { semester: "6th Semester", total: 42, present: 41 },
    { semester: "7th Semester", total: 39, present: 35 },
  ],
  BBA: [
    { semester: "2nd Semester", total: 35, present: 32 },
    { semester: "3rd Semester", total: 37, present: 36 },
    { semester: "6th Semester", total: 40, present: 39 },
    { semester: "7th Semester", total: 38, present: 35 },
  ],
};

// Dummy recent log
const recentLog = [
  { name: "Amrit Pariyar", id: "BICTE-2077-12", time: "09:45 AM", status: "Present" },
  { name: "Sita Sharma", id: "BICTE-2077-15", time: "09:46 AM", status: "Present" },
  { name: "Ramesh Karki", id: "BICTE-2080-05", time: "09:50 AM", status: "Absent" },
];

function Dashboard() {
  return (
    <div className="teacher-dashboard">
      {/* LEFT SECTION */}
      <div className="left-section">
        {/* Attendance Summary */}
        <h2 className="section-title">📊 Program-wise Attendance Summary</h2>
        {Object.entries(classData).map(([program, semesters]) => (
          <div key={program} className="program-group">
            <h3>{program}</h3>
            <div className="semester-row">
              {semesters.map((batch, index) => (
                <div className="summary-card" key={index}>
                  <strong>{batch.semester}</strong>
                  <p>Total: {batch.total}</p>
                  <p className="text-present">Present: {batch.present}</p>
                  <p className="text-absent">Absent: {batch.total - batch.present}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Recent Attendance Log */}
        <h2 className="section-title">📝 Recent Attendance Log</h2>
        <div className="recent-log">
          {recentLog.map((entry, index) => (
            <div className="log-entry" key={index}>
              <p>
                <strong>{entry.name}</strong> ({entry.id})
              </p>
              <p>{entry.time} — <span className={entry.status.toLowerCase()}>{entry.status}</span></p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
        {/* CCTV Preview */}
        <div className="cctv-preview">
          <h3>🎥 CCTV Preview</h3>
          <div className="cctv-box">[ Live Camera Stream ]</div>
        </div>

        {/* Bus Tracking */}
        <div className="bus-tracking-card">
          <h3>🚌 Bus Tracking</h3>
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
    </div>

  );
}

export default Dashboard;





























// import React from 'react';
// import './Dashboard.css';


// // Simulated class-wise data
// const classData = {
//   BICTE: [
//     { semester: '2nd Semester', total: 40, present: 38 },
//     { semester: '6th Semester', total: 42, present: 41 },
//     { semester: '7th Semester', total: 39, present: 35 },
//   ],
//   BBA: [
//     { semester: '2nd Semester', total: 35, present: 32 },
//     { semester: '3rd Semester', total: 37, present: 36 },
//     { semester: '6th Semester', total: 40, present: 39 },
//     { semester: '7th Semester', total: 38, present: 35 },
//   ],
// };

// function Dashboard() {
//   return (
//     <div className="dashboard-container">
//       <div className="attendance-summary">
//         <h2>Program-wise Attendance Summary</h2>
//         {Object.entries(classData).map(([program, semesters]) => (
//           <div key={program} className="program-group">
//             <h3>{program}</h3>
//             {semesters.map((batch, index) => (
//               <div className="summary-card" key={index}>
//                 <strong>{batch.semester}</strong>: 
//                 <span className="text-total"> Total: {batch.total}</span> |
//                 <span className="text-present"> Present: {batch.present}</span> |
//                 <span className="text-absent"> Absent: {batch.total - batch.present}</span>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       <div className="bus-tracking-card">
//         <h4>Bus Tracking</h4>
//         <div className="bus-info-box">
//           <p><strong>Estimated Time of Arrival:</strong> 10:05 AM</p>
//           <div className="map-placeholder">[Map Placeholder]</div>
//         </div>
//         <div className="notify-buttons">
//           <button className="btn btn-primary">Notify All</button>
//           <button className="btn btn-secondary">Send Alert</button>

//         </div>
//       </div>
//     </div>
    
//   );
// }
// export default Dashboard;


