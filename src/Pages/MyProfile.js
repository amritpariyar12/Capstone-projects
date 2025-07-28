import React from 'react';
import './MyProfile.css';

function MyProfile() {
  const student = {
    name: 'Amrit Nepali',
    studentId: 'BICTE-2077-12',
    email: 'amritpariyar249@gmail.com',
    contact: '9821311963',
    dob: '2057-11-05 B.S.',
    gender: 'Male',
    semester: '7th Semester',
    course: 'BICTE',
    admissionDate: '2077-03-10',
    classTeacher: 'Ms. Anita Shrestha',
    attendance: '91%',
    permanentAddress: 'Parasi, Nawalparasi',
    temporaryAddress: 'Butwal, Rupandehi',
    province: 'Lumbini',
    guardianName: 'Kamal Nepali',
    guardianRelation: 'Father',
    guardianPhone: '9840000000',
    alternatePhone: '9810000000',
  };

  return (
    <div className="profile-container">
      <h2>👤 My Profile</h2>

      {/* Top Info */}
      <div className="profile-card">
        <div className="avatar">{student.name.charAt(0)}</div>
        <div className="info">
          <h3>{student.name}</h3>
          <p><strong>ID:</strong> {student.studentId}</p>
          <p><strong>Class:</strong> {student.course} ({student.semester})</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Contact:</strong> {student.contact}</p>
        </div>
      </div>

      {/* Two Column Cards */}
      <div className="details-grid">
        <div className="card">
          <h4>📘 Academic Info</h4>
          <p><strong>Semester:</strong> {student.semester}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Admission:</strong> {student.admissionDate}</p>
          <p><strong>Class Teacher:</strong> {student.classTeacher}</p>
          <p><strong>Attendance:</strong> {student.attendance}</p>
        </div>

        <div className="card">
          <h4>🏠 Address</h4>
          <p><strong>Permanent:</strong> {student.permanentAddress}</p>
          <p><strong>Temporary:</strong> {student.temporaryAddress}</p>
          <p><strong>Province:</strong> {student.province}</p>
          <p><strong>DOB:</strong> {student.dob}</p>
          <p><strong>Gender:</strong> {student.gender}</p>
        </div>

        <div className="card full">
          <h4>👪 Guardian Info</h4>
          <p><strong>Name:</strong> {student.guardianName}</p>
          <p><strong>Relation:</strong> {student.guardianRelation}</p>
          <p><strong>Phone:</strong> {student.guardianPhone}</p>
          <p><strong>Alternate:</strong> {student.alternatePhone}</p>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
