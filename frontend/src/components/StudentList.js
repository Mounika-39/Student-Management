import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './FormStyles.css';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://student-backend-6vyn.onrender.com/students')
      .then(res => setStudents(res.data))
      .catch(err => alert('Error fetching students: ' + err.message));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://student-backend-6vyn.onrender.com/${id}`)
      .then(() => setStudents(students.filter(s => s._id !== id)))
      .catch(err => alert('Error deleting student: ' + err.message));
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Course</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id}>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.email}</td>
              <td>{new Date(s.dob).toLocaleDateString()}</td>
              <td>{s.course}</td>
              <td>
                <span style={{ 
                  color: s.status === 'Active' ? 'green' : 'red',
                  fontWeight: 'bold'
                }}>
                  {s.status}
                </span>
              </td>
              <td>
                <Link to={`/edit/${s._id}`}>Edit</Link> |{" "}
                <button 
                  style={{ color: 'red', border: 'none', background: 'transparent', cursor: 'pointer' }}
                  onClick={() => handleDelete(s._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;

