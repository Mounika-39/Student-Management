import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

function AddStudent() {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    course: '',
    status: 'Active',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://student-management-s9mm.onrender.com/students', student)
      .then(() => {
        alert('Student added successfully!');
        navigate('/students');
      })
      .catch(err => {
        console.error(err.response?.data || err.message);
        alert('Error adding student: ' + (err.response?.data?.error || err.message));
      });
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} className="student-form">

        <label>First Name</label>
        <input name="firstName" value={student.firstName} onChange={handleChange} required />

        <label>Last Name</label>
        <input name="lastName" value={student.lastName} onChange={handleChange} required />

        <label>Email</label>
        <input name="email" type="email" value={student.email} onChange={handleChange} required />

        <label>Date of Birth</label>
        <input name="dob" type="date" value={student.dob} onChange={handleChange} required />

        <label>Course</label>
        <input name="course" value={student.course} onChange={handleChange} required />

        <label>Status</label>
        <select name="status" value={student.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
