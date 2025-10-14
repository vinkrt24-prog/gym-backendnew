const AdminNotes = require('../models/AdminNotes');

exports.getNotes = async (req, res) => {
  try {
    const notes = await AdminNotes.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addNote = async (req, res) => {
  const { content } = req.body;
  const note = new AdminNotes({ content });

  try {
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Clear all notes (delete all)
exports.clearNotes = async (req, res) => {
  try {
    await AdminNotes.deleteMany({});
    res.json({ message: 'All notes cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

