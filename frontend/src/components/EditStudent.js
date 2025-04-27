import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    course: '',
    status: 'Active',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/students/${id}`)
      .then(res => {
        const studentData = res.data;
        studentData.dob = studentData.dob?.split('T')[0]; 
        setStudent(studentData);
      })
      .catch(err => alert('Error fetching student: ' + err.message));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`${process.env.REACT_APP_API_URL}/students/${id}`, student)
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
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit} className="student-form">
        {/* input fields */}
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

        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;
