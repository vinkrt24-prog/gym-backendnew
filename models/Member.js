const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  join_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Member', memberSchema);
