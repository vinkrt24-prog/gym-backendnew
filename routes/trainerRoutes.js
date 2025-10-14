const express = require('express');
const router = express.Router();

const {
  getTrainers,
  addTrainer,
  deleteTrainer
} = require('../controllers/trainerController');

router.get('/', getTrainers);
router.post('/add', addTrainer);
router.delete('/:id', deleteTrainer);

module.exports = router;
