import React, { useMemo, useState } from "react";
import "./TeacherReports.css";
// Charts
import {
  ResponsiveContainer,
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line
} from "recharts";

// ----------- Demo Data Setup -----------
const PROGRAMS = ["BICTE", "BBA"];
const SEMESTERS = ["2nd", "3rd", "6th", "7th"];

// Small helper to generate a stable pseudo-random boolean for attendance
function seededBoolean(seed, day) {
  // simple deterministic pseudo-random: hash-ish using char codes + day
  const code = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0) + day * 37;
  // ~80% present, 15% absent, 5% holiday
  const r = (code % 100) / 100;
  if (r < 0.05) return "Holiday";
  if (r < 0.20) return "Absent";
  return "Present";
}

// Create demo students
const ALL_STUDENTS = [
  { id: "S-001", name: "Amrit Pariyar", program: "BICTE", semester: "7th" },
  { id: "S-002", name: "Bipin Pokhrel", program: "BICTE", semester: "7th" },
  { id: "S-003", name: "Dhananjay Chaudhary", program: "BICTE", semester: "7th" },
  { id: "S-004", name: "Durga Pangeni", program: "BICTE", semester: "7th" },
  { id: "S-005", name: "Simon Gurung", program: "BICTE", semester: "7th" },
  { id: "S-006", name: "Usa Gaha", program: "BICTE", semester: "7th" },
  { id: "S-003", name: "Prakash Raut", program: "BICTE", semester: "6th" },
  { id: "S-004", name: "Sita Karki", program: "BBA", semester: "3rd" },
  { id: "S-005", name: "Nimesh Poudel", program: "BBA", semester: "2nd" },
  { id: "S-006", name: "Aashma Thapa", program: "BBA", semester: "6th" },
  { id: "S-007", name: "Ritu Gurung", program: "BICTE", semester: "2nd" },
  { id: "S-008", name: "Kamal Nepali", program: "BICTE", semester: "3rd" },
];

// get all dates in the selected month
function getMonthDates(year, monthIndexZeroBased) {
  const dates = [];
  const d = new Date(year, monthIndexZeroBased, 1);
  while (d.getMonth() === monthIndexZeroBased) {
    dates.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

function formatISO(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function TeacherReports() {
  // -------- Filters --------
  const today = new Date();
  const [program, setProgram] = useState("BICTE");
  const [semester, setSemester] = useState("7th");
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth()); // 0-based

  // Generate date range from selected month
  const monthDates = useMemo(() => getMonthDates(year, month), [year, month]);

  // Filter students by program + semester
  const students = useMemo(
    () => ALL_STUDENTS.filter(s => s.program === program && s.semester === semester),
    [program, semester]
  );

  // Build attendance matrix for charts/table (deterministic dummy)
  const attendanceMatrix = useMemo(() => {
    return students.map(s => {
      const records = monthDates.map(d => {
        const status = seededBoolean(s.id, d.getDate());
        return { date: formatISO(d), status };
      });
      return { ...s, records };
    });
  }, [students, monthDates]);

  // Quick stats & datasets
  const summary = useMemo(() => {
    let totalPresent = 0, totalAbsent = 0, totalHoliday = 0, total = 0;

    attendanceMatrix.forEach(s => {
      s.records.forEach(r => {
        total += 1;
        if (r.status === "Present") totalPresent += 1;
        else if (r.status === "Absent") totalAbsent += 1;
        else totalHoliday += 1;
      });
    });

    const studentSummaries = attendanceMatrix.map(s => {
      const p = s.records.filter(r => r.status === "Present").length;
      const a = s.records.filter(r => r.status === "Absent").length;
      const h = s.records.filter(r => r.status === "Holiday").length;
      const perc = s.records.length ? Math.round((p / s.records.length) * 100) : 0;
      return {
        id: s.id,
        name: s.name,
        present: p,
        absent: a,
        holidays: h,
        percentage: perc,
      };
    });

    // Line chart: daily total presents
    const lineData = monthDates.map(d => {
      const label = d.getDate();
      const presentCount = attendanceMatrix.reduce((acc, s) => {
        const rec = s.records.find(r => r.date === formatISO(d));
        return acc + (rec?.status === "Present" ? 1 : 0);
      }, 0);
      return { day: label, present: presentCount };
    });

    // Bar chart: student-wise %
    const barData = studentSummaries.map(s => ({
      name: s.name,
      percentage: s.percentage,
    }));

    // Pie chart: present vs others
    const pieData = [
      { name: "Present", value: totalPresent },
      { name: "Absent", value: totalAbsent },
      { name: "Holiday", value: totalHoliday },
    ];

    const avgPerc = studentSummaries.length
      ? Math.round(
          studentSummaries.reduce((a, b) => a + b.percentage, 0) / studentSummaries.length
        )
      : 0;

    return {
      totals: { total, totalPresent, totalAbsent, totalHoliday },
      studentSummaries,
      lineData,
      barData,
      pieData,
      avgPerc,
    };
  }, [attendanceMatrix, monthDates]);

  // Export CSV
  function exportCSV() {
    const header = [
      "Student ID",
      "Student Name",
      "Present",
      "Absent",
      "Holidays",
      "Attendance %"
    ];
    const rows = summary.studentSummaries.map(s => [
      s.id, s.name, s.present, s.absent, s.holidays, s.percentage
    ]);
    const csv = [header, ...rows].map(r => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `attendance_${program}_${semester}_${year}-${String(month+1).padStart(2,"0")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="reports-container">
      <h2 className="reports-title">📊 Reports</h2>

      {/* Filters */}
      <div className="filters">
        <div className="filter">
          <label>Program</label>
          <select value={program} onChange={e => setProgram(e.target.value)}>
            {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div className="filter">
          <label>Semester</label>
          <select value={semester} onChange={e => setSemester(e.target.value)}>
            {SEMESTERS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="filter">
          <label>Year</label>
          <input
            type="number"
            value={year}
            onChange={e => setYear(Number(e.target.value))}
            min="2000"
            max="2099"
          />
        </div>
        <div className="filter">
          <label>Month</label>
          <select value={month} onChange={e => setMonth(Number(e.target.value))}>
            {Array.from({ length: 12 }).map((_, i) => (
              <option key={i} value={i}>
                {new Date(2000, i, 1).toLocaleString("en-US", { month: "long" })}
              </option>
            ))}
          </select>
        </div>

        <button className="btn export" onClick={exportCSV}>⬇️ Export CSV</button>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Students</div>
          <div className="stat-value">{attendanceMatrix.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg Attendance</div>
          <div className="stat-value">{summary.avgPerc}%</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Present</div>
          <div className="stat-value">{summary.totals.totalPresent}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Absent</div>
          <div className="stat-value">{summary.totals.totalAbsent}</div>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <h4>Present vs Absent vs Holiday</h4>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={summary.pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={85}
                label
              >
                {summary.pieData.map((_, idx) => (
                  <Cell key={idx} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h4>Student-wise Attendance %</h4>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={summary.barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" hide />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="percentage" name="Attendance %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card wide">
          <h4>Daily Present Trend (This Month)</h4>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={summary.lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Line dataKey="present" name="Present" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="table-card">
        <div className="table-header">
          <h4>Student-wise Attendance (Monthly)</h4>
        </div>
        <table className="report-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Holidays</th>
              <th>Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {summary.studentSummaries.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.present}</td>
                <td>{s.absent}</td>
                <td>{s.holidays}</td>
                <td>{s.percentage}%</td>
              </tr>
            ))}
            {summary.studentSummaries.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", color: "#6b7280" }}>
                  No students found for the selected Program/Semester.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeacherReports;
