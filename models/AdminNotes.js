const mongoose = require('mongoose');

const adminNotesSchema = new mongoose.Schema({
  content: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('AdminNotes', adminNotesSchema);
