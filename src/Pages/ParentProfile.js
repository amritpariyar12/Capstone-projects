import React from 'react';
import './ParentProfile.css';

function ParentProfile() {
  const parent = {
    name: 'Amar Bahadur Pariyar',
    parentId: 'PARENT-1001',
    email: 'amarbahadur@example.com',
    contact: '9840000000',
    gender: 'Male',
    relation: 'Father',
    occupation: 'Businessman',
    permanentAddress: 'Sigana, Baglung',
    temporaryAddress: 'Sunwal, Nawalparasi',
    province: 'Lumbini',
    children: [
      {
        name: 'Amrit Pariyar',
        studentId: 'BICTE-2077-12',
        course: 'BICTE',
        semester: '7th Semester',
      },
    ],
    alternatePhone: '9810000000',
  };

  return (
    <div className="profile-container">
      <h2>👤 My Profile</h2>

      {/* Top Info */}
      <div className="profile-card">
        <div className="avatar">{parent.name.charAt(0)}</div>
        <div className="info">
          <h3>{parent.name}</h3>
          <p><strong>ID:</strong> {parent.parentId}</p>
          <p><strong>Relation:</strong> {parent.relation}</p>
          <p><strong>Email:</strong> {parent.email}</p>
          <p><strong>Contact:</strong> {parent.contact}</p>
        </div>
      </div>

      {/* Two Column Cards */}
      <div className="details-grid">
        <div className="card">
          <h4>🏠 Address</h4>
          <p><strong>Permanent:</strong> {parent.permanentAddress}</p>
          <p><strong>Temporary:</strong> {parent.temporaryAddress}</p>
          <p><strong>Province:</strong> {parent.province}</p>
          <p><strong>Gender:</strong> {parent.gender}</p>
          <p><strong>Occupation:</strong> {parent.occupation}</p>
        </div>

        <div className="card">
          <h4>📞 Contact Info</h4>
          <p><strong>Primary Phone:</strong> {parent.contact}</p>
          <p><strong>Alternate Phone:</strong> {parent.alternatePhone}</p>
          <p><strong>Email:</strong> {parent.email}</p>
        </div>

        <div className="card full">
          <h4>👶 Children Info</h4>
          {parent.children.map((child, index) => (
            <div key={index}>
              <p><strong>Name:</strong> {child.name}</p>
              <p><strong>Student ID:</strong> {child.studentId}</p>
              <p><strong>Class:</strong> {child.course} ({child.semester})</p>
              {index < parent.children.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParentProfile;
