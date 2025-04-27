const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  dob: { type: Date },
  course: { type: String },
  status: { type: String }
});

module.exports = mongoose.model('Student', studentSchema);

