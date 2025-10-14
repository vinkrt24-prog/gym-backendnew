const express = require('express');
const router = express.Router();

const {
  getMembers,
  addMember,
  deleteMember
} = require('../controllers/memberController');

// GET all members
router.get('/', getMembers);

// POST add new member
router.post('/add', addMember);

// DELETE member by ID
router.delete('/:id', deleteMember);

module.exports = router;
