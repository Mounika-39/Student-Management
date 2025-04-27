import React, { useState } from 'react';
import axios from 'axios';

function StudentForm({ fetchStudents }) {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    isActive: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent({
      ...student,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/students`, student);
      fetchStudents();
      setStudent({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        course: '',
        status: 'Active'
      });      
    } catch (err) {
      console.error('Error adding student:', err.response?.data || err.message);
      alert('Failed to add student: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields unchanged */}
    </form>
  );
}

export default StudentForm;

