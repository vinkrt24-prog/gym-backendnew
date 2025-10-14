const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String },        // e.g., Cardio, Strength Training
  email: { type: String, unique: true },
  phone: { type: String }
});

module.exports = mongoose.model('Trainer', trainerSchema);
