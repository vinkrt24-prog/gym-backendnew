const express = require('express');
const router = express.Router();

const { getNotes, saveNotes, clearNotes } = require('../controllers/notesController');

// Get notes
router.get('/', getNotes);

// Save or update notes
router.post('/', saveNotes);

// Clear notes
router.delete('/', clearNotes);

module.exports = router;
