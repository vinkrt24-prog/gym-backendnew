const express = require('express');
const router = express.Router();

const {
  getNotes,
  addNote,
  clearNotes
} = require('../controllers/notesController');

router.get('/', getNotes);
router.post('/add', addNote);
router.delete('/clear', clearNotes);

module.exports = router;
