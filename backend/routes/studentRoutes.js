const express = require('express');
const router = express.Router();
const {
  createStudent,
  getStudents,
  deleteStudent
} = require('../controllers/studentController');

router.post('/', createStudent);
router.get('/', getStudents);
router.delete('/:id', deleteStudent);

module.exports = router;


