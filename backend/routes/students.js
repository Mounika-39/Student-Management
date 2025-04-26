
// backend/routes/students.js
const express = require('express');
const router = express.Router();
const {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

app.post('/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', getStudents);
router.get('/:id', getStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;