const express = require('express');
const router = express.Router();

const {
  getMembers,
  addMember,
  deleteMember,
  getMemberStats
} = require('../controllers/memberController');

// Get all members
router.get('/', getMembers);

// Add a new member
router.post('/', addMember);

// Delete a member by ID
router.delete('/:id', deleteMember);

// Get dashboard stats
router.get('/stats', getMemberStats);

module.exports = router;
