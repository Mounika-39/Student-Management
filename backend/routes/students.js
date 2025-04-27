
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
router.post('/students', async (req, res) => {
  try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).send(student);
  } catch (error) {
      res.status(400).send(error);
  }
});

router.get('/students', async (req, res) => {
  try {
      const students = await Student.find();
      res.send(students);
  } catch (error) {
      res.status(500).send(error);
  }
});

router.get('/:id', getStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;