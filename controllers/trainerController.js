const Trainer = require('../models/Trainer');

// GET all trainers
const getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch trainers' });
  }
};

// POST new trainer
const addTrainer = async (req, res) => {
  try {
    const { first_name, last_name, age, timing, employment_status } = req.body;

    console.log("Incoming Trainer Data:", req.body); // 👈 log request body

    const newTrainer = new Trainer({
      first_name,
      last_name,
      age,
      timing,
      employment_status
    });

    await newTrainer.save();
    res.status(201).json({ message: 'Trainer added successfully!' });
  } catch (err) {
    console.error("Error adding trainer:", err); // 👈 log full error
    res.status(500).json({ error: err.message }); // return actual message
  }
};

// DELETE trainer
const deleteTrainer = async (req, res) => {
  try {
    await Trainer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Trainer deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete trainer' });
  }
};

module.exports = { getTrainers, addTrainer, deleteTrainer };
