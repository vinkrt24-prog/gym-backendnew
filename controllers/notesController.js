const AdminNotes = require('../models/AdminNotes');

// GET notes
const getNotes = async (req, res) => {
  try {
    let notes = await AdminNotes.findOne();
    if (!notes) {
      notes = new AdminNotes();
      await notes.save();
    }
    res.json({ content: notes.content });
  } catch (err) {
    console.error('❌ Error fetching notes:', err);
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
};

// POST or UPDATE notes
const saveNotes = async (req, res) => {
  try {
    const { content } = req.body;
    let notes = await AdminNotes.findOne();
    if (!notes) {
      notes = new AdminNotes({ content });
    } else {
      notes.content = content;
    }
    await notes.save();
    res.json({ message: 'Notes saved successfully!' });
  } catch (err) {
    console.error('❌ Error saving notes:', err);
    res.status(500).json({ error: 'Failed to save notes' });
  }
};

// DELETE notes
const clearNotes = async (req, res) => {
  try {
    let notes = await AdminNotes.findOne();
    if (notes) {
      notes.content = '';
      await notes.save();
    }
    res.json({ message: 'Notes cleared successfully!' });
  } catch (err) {
    console.error('❌ Error clearing notes:', err);
    res.status(500).json({ error: 'Failed to clear notes' });
  }
};

module.exports = { getNotes, saveNotes, clearNotes };


