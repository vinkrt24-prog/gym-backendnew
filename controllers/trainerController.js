const Trainer = require('../models/Trainer');

exports.getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addTrainer = async (req, res) => {
  const { name, specialty, email, phone } = req.body;
  const trainer = new Trainer({ name, specialty, email, phone });

  try {
    const savedTrainer = await trainer.save();
    res.status(201).json(savedTrainer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTrainer = async (req, res) => {
  try {
    await Trainer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Trainer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
