import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import './components/FormStyles.css';

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1 className="main-title">🎓 Student Management System</h1>
      </div>

      <nav className="nav-links">
        <Link to="/add">Add Student</Link>
        <Link to="/students">View Students</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div className="welcome-text">Welcome to Student Management System</div>} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </div>
  );
}

export default App;
