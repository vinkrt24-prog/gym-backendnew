const express = require('express');
const router = express.Router();
const {
  getTrainers,
  addTrainer,
  deleteTrainer
} = require('../controllers/trainerController');

// GET all trainers
router.get('/', getTrainers);

// POST add new trainer
router.post('/', addTrainer);

// DELETE trainer by ID
router.delete('/:id', deleteTrainer);

module.exports = router;
