import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './FormStyles.css';

function EditStudent() {
  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    course: '',
    enrollmentYear: '',
    status: 'Active',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/students/${id}`)
      .then(res => {
        const studentData = res.data;
        studentData.dob = studentData.dob?.split('T')[0]; // Formatting DOB for input
        setStudent(studentData);
      })
      .catch(err => alert('Error fetching student: ' + err.message));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/students/${id}`, student)
      .then(() => {
        alert('Student updated successfully!');
        navigate('/students');
      })
      .catch(err => {
        console.error(err.response?.data || err.message);
        alert('Error updating student: ' + (err.response?.data?.error || err.message));
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Edit Student</h2>
      <form onSubmit={handleSubmit} className="student-form">

        <div className="form-group">
          <label>Student ID</label>
          <input
            name="studentId"
            type="number"
            value={student.studentId}
            onChange={handleChange}
            placeholder="Enter Student ID"
            required
          />
        </div>

        <div className="form-group">
          <label>First Name</label>
          <input
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            name="dob"
            type="date"
            value={student.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Course</label>
          <input
            name="course"
            value={student.course}
            onChange={handleChange}
            placeholder="Enter Course Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Enrollment Year</label>
          <input
            name="enrollmentYear"
            type="number"
            value={student.enrollmentYear}
            onChange={handleChange}
            placeholder="Enter Enrollment Year"
            required
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            name="status"
            value={student.status}
            onChange={handleChange}
            required
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;

