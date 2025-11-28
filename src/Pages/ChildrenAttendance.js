import React, { useState, useEffect } from 'react';
import './ChildrenAttendance.css';
import { getMonthDaysWithWeek as importedGetMonthDaysWithWeek } from '../utils/nepaliDateUtils';

const nepaliMonths = [
  'Baishakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra',
  'Ashwin', 'Kartik', 'Mangsir', 'Poush', 'Magh',
  'Falgun', 'Chaitra'
];

// Fallback function if getMonthDaysWithWeek is not available
function fallbackMonthDays(year, month) {
  // Returns 30 days for demo
  return Array.from({ length: 30 }, (_, i) => ({
    date: `${year}-${String(month + 1).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`,
    weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][i % 7]
  }));
}

function generateRandomStatus() {
  const options = ['Present', 'Absent', 'Holiday'];
  return options[Math.floor(Math.random() * options.length)];
}

function ChildrenAttendance() {
  const [selectedMonth, setSelectedMonth] = useState(3); // Default: Shrawan
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const year = 2082;
    let monthDays = [];

    // Try imported function if it exists
    if (typeof importedGetMonthDaysWithWeek === 'function') {
      try {
        monthDays = importedGetMonthDaysWithWeek(year, selectedMonth);
      } catch (err) {
        console.error("Error using imported getMonthDaysWithWeek:", err);
      }
    }

    // Use fallback if imported function is missing or returned empty
    if (!Array.isArray(monthDays) || monthDays.length === 0) {
      monthDays = fallbackMonthDays(year, selectedMonth);
    }

    const data = monthDays.map(({ date, weekday }) => ({
      date,
      weekday,
      status: generateRandomStatus()
    }));

    setAttendanceData(data);
  }, [selectedMonth]);

  const presentDays = attendanceData.filter(d => d.status === 'Present').length;
  const absentDays = attendanceData.filter(d => d.status === 'Absent').length;
  const holidays = attendanceData.filter(d => d.status === 'Holiday').length;

  return (
    <div className="children-attendance-container">
      <h2>📘 Children Attendance</h2>

      <div className="month-selector">
        <label>Select Month: </label>
        <select
          value={selectedMonth}
          onChange={e => setSelectedMonth(Number(e.target.value))}
        >
          {nepaliMonths.map((month, idx) => (
            <option key={idx} value={idx}>{month}</option>
          ))}
        </select>
      </div>

      <div className="attendance-summary">
        <span>✅ Present: {presentDays}</span>
        <span>❌ Absent: {absentDays}</span>
        <span>📅 Holidays: {holidays}</span>
        <span>📊 Total: {attendanceData.length}</span>
      </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Weekday</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, index) => (
            <tr key={index} className={entry.status.toLowerCase()}>
              <td>{entry.date}</td>
              <td>{entry.weekday}</td>
              <td>{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChildrenAttendance;
