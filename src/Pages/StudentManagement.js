import React, { useState } from "react";
import "./StudentManagement.css";

const studentsData = [
  { id: "BICTE-2077-12", name: "Amrit Pariyar", course: "BICTE", semester: "7th Semester", contact: "9821311963", email: "amritpariyar249@gmail.com", attendance: "91%" },
  { id: "BICTE-2077-15", name: "Sita Sharma", course: "BICTE", semester: "7th Semester", contact: "9800000001", email: "sita@example.com", attendance: "87%" },
  { id: "BICTE-2080-05", name: "Ramesh Karki", course: "BICTE", semester: "2nd Semester", contact: "9800000002", email: "ramesh@example.com", attendance: "93%" },
  { id: "BBA-2079-10", name: "Kavita Thapa", course: "BBA", semester: "3rd Semester", contact: "9811111111", email: "kavita@example.com", attendance: "89%" },
  { id: "BBA-2078-08", name: "Prakash Adhikari", course: "BBA", semester: "6th Semester", contact: "9822222222", email: "prakash@example.com", attendance: "92%" },
  { id: "BBA-2077-02", name: "Laxmi Gurung", course: "BBA", semester: "7th Semester", contact: "9833333333", email: "laxmi@example.com", attendance: "85%" },
];

function StudentManagement() {
  const [filterCourse, setFilterCourse] = useState("All");
  const [filterSemester, setFilterSemester] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const filteredStudents = studentsData.filter(
    (s) =>
      (filterCourse === "All" || s.course === filterCourse) &&
      (filterSemester === "All" || s.semester === filterSemester) &&
      (s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.id.toLowerCase().includes(search.toLowerCase()))
  );

  const handleView = (student) => {
    setSelectedStudent(student);
    setEditMode(false);
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setEditMode(true);
  };

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this student?")) {
      alert(`Student with ID ${id} removed (demo only).`);
    }
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setEditMode(false);
  };

  return (
    <div className="student-management">
      <h2>👩‍🎓 Student Management</h2>

      {/* Filters */}
      <div className="filters">
        <select value={filterCourse} onChange={(e) => setFilterCourse(e.target.value)}>
          <option value="All">All Courses</option>
          <option value="BICTE">BICTE</option>
          <option value="BBA">BBA</option>
        </select>

        <select value={filterSemester} onChange={(e) => setFilterSemester(e.target.value)}>
          <option value="All">All Semesters</option>
          <option value="2nd Semester">2nd Semester</option>
          <option value="3rd Semester">3rd Semester</option>
          <option value="6th Semester">6th Semester</option>
          <option value="7th Semester">7th Semester</option>
        </select>

        <input
          type="text"
          placeholder="🔍 Search by Name or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Student Table */}
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Semester</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, idx) => (
              <tr key={idx}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.semester}</td>
                <td>{student.contact}</td>
                <td>
                  <button className="btn btn-view" onClick={() => handleView(student)}>View</button>
                  <button className="btn btn-edit" onClick={() => handleEdit(student)}>Edit</button>
                  <button className="btn btn-remove" onClick={() => handleRemove(student.id)}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", color: "#666" }}>
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {selectedStudent && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>
              {editMode
                ? `✏️ Edit Student - ${selectedStudent.name}`
                : `👁 View Student - ${selectedStudent.name}`}
            </h3>

            {editMode ? (
              <form className="edit-form">
                <label>
                  Name:
                  <input type="text" defaultValue={selectedStudent.name} />
                </label>
                <label>
                  Email:
                  <input type="email" defaultValue={selectedStudent.email} />
                </label>
                <label>
                  Contact:
                  <input type="text" defaultValue={selectedStudent.contact} />
                </label>
                <button type="submit" className="btn btn-save">Save</button>
              </form>
            ) : (
              <div className="student-details">
                <p><strong>ID:</strong> {selectedStudent.id}</p>
                <p><strong>Course:</strong> {selectedStudent.course}</p>
                <p><strong>Semester:</strong> {selectedStudent.semester}</p>
                <p><strong>Email:</strong> {selectedStudent.email}</p>
                <p><strong>Contact:</strong> {selectedStudent.contact}</p>
                <p><strong>Attendance:</strong> {selectedStudent.attendance}</p>
              </div>
            )}

            <button className="btn btn-close" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentManagement;





















// import React, { useState } from "react";
// import "./StudentManagement.css";

// const studentsData = [
//   { id: "BICTE-2077-12", name: "Amrit Pariyar", course: "BICTE", semester: "7th Semester", contact: "9821311963" },
//   { id: "BICTE-2077-15", name: "Sita Sharma", course: "BICTE", semester: "7th Semester", contact: "9800000001" },
//   { id: "BICTE-2080-05", name: "Ramesh Karki", course: "BICTE", semester: "2nd Semester", contact: "9800000002" },
//   { id: "BBA-2079-10", name: "Kavita Thapa", course: "BBA", semester: "3rd Semester", contact: "9811111111" },
//   { id: "BBA-2078-08", name: "Prakash Adhikari", course: "BBA", semester: "6th Semester", contact: "9822222222" },
//   { id: "BBA-2077-02", name: "Laxmi Gurung", course: "BBA", semester: "7th Semester", contact: "9833333333" },
// ];

// function StudentManagement() {
//   const [filterCourse, setFilterCourse] = useState("All");
//   const [filterSemester, setFilterSemester] = useState("All");
//   const [search, setSearch] = useState("");

//   const filteredStudents = studentsData.filter(
//     (s) =>
//       (filterCourse === "All" || s.course === filterCourse) &&
//       (filterSemester === "All" || s.semester === filterSemester) &&
//       (s.name.toLowerCase().includes(search.toLowerCase()) ||
//         s.id.toLowerCase().includes(search.toLowerCase()))
//   );

//   return (
//     <div className="student-management">
//       <h2>👩‍🎓 Student Management</h2>

//       {/* Filters */}
//       <div className="filters">
//         <select value={filterCourse} onChange={(e) => setFilterCourse(e.target.value)}>
//           <option value="All">All Courses</option>
//           <option value="BICTE">BICTE</option>
//           <option value="BBA">BBA</option>
//         </select>

//         <select value={filterSemester} onChange={(e) => setFilterSemester(e.target.value)}>
//           <option value="All">All Semesters</option>
//           <option value="2nd Semester">2nd Semester</option>
//           <option value="3rd Semester">3rd Semester</option>
//           <option value="6th Semester">6th Semester</option>
//           <option value="7th Semester">7th Semester</option>
//         </select>

//         <input
//           type="text"
//           placeholder="🔍 Search by Name or ID"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Student Table */}
//       <table className="student-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Course</th>
//             <th>Semester</th>
//             <th>Contact</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStudents.length > 0 ? (
//             filteredStudents.map((student, idx) => (
//               <tr key={idx}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.course}</td>
//                 <td>{student.semester}</td>
//                 <td>{student.contact}</td>
//                 <td>
//                   {/* your same buttons remain */}
//                   <button className="btn btn-view">View</button>
//                   <button className="btn btn-edit">Edit</button>
//                   <button className="btn btn-remove">Remove</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" style={{ textAlign: "center", color: "#666" }}>
//                 No students found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default StudentManagement;





















