const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  timing: { type: String, required: true },
  employment_status: { type: String, required: true }
});

module.exports = mongoose.model('Trainer', trainerSchema);
