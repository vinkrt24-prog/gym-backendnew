// POST new trainer
const addTrainer = async (req, res) => {
  try {
    const { first_name, last_name, age, timing, employment_status } = req.body;

    console.log("Incoming Trainer Data:", req.body); // 👈 log what you're getting

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

