const mongoose = require('mongoose');

const adminNotesSchema = new mongoose.Schema({
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AdminNotes', adminNotesSchema);
