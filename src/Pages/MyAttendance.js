import React, { useState, useEffect } from 'react';
import './MyAttendance.css';

const months = [
  'Baishakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin',
  'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra',
];

const monthDays = [31, 31, 32, 32, 31, 30, 30, 30, 29, 29, 30, 30];

const startingWeekday = {
  0: 1, 1: 4, 2: 6, 3: 4, 4: 0, 5: 2,
  6: 3, 7: 6, 8: 5, 9: 1, 10: 2, 11: 5,
};

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function MyAttendance() {
  const currentYear = 2081;
  const [selectedMonth, setSelectedMonth] = useState(3); // Shrawan
  const [attendanceData, setAttendanceData] = useState([]);
  const [summary, setSummary] = useState({ present: 0, absent: 0, holiday: 0 });

  useEffect(() => {
    generateAttendance(selectedMonth);
  }, [selectedMonth]);

  const generateAttendance = (monthIndex) => {
    const totalDays = monthDays[monthIndex];
    const startDay = startingWeekday[monthIndex];

    const data = [];
    let present = 0, absent = 0, holiday = 0;

    for (let day = 1; day <= totalDays; day++) {
      const weekdayIndex = (startDay + (day - 1)) % 7;
      const weekday = weekDays[weekdayIndex];

      let status = 'Present';
      if (weekday === 'Saturday') {
        status = 'Holiday';
        holiday++;
      } else if (Math.random() < 0.1) {
        status = 'Absent';
        absent++;
      } else {
        present++;
      }

      data.push({
        day,
        weekday,
        status
      });
    }

    setAttendanceData(data);
    setSummary({ present, absent, holiday });
  };

  return (
    <div className="my-attendance">
      <div className="header">
        <h2>📅 My Attendance</h2>
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
          {months.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
      </div>

      <div className="summary">
        <p><strong>Total Days:</strong> {monthDays[selectedMonth]}</p>
        <p><strong>Present:</strong> {summary.present}</p>
        <p><strong>Absent:</strong> {summary.absent}</p>
        <p><strong>Holidays:</strong> {summary.holiday}</p>
      </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date (B.S)</th>
            <th>Weekday</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index} className={record.status === 'Holiday' ? 'holiday' : record.status === 'Absent' ? 'absent' : 'present'}>
              <td>{`${months[selectedMonth]} ${record.day}, ${currentYear}`}</td>
              <td>{record.weekday}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyAttendance;
