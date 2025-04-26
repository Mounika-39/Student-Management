const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  course: { type: String, required: true },
  status: { type: String, default: 'Active' }
});

module.exports = mongoose.model('Student', studentSchema);
