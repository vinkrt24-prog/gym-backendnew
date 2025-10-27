const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    timing: {
      type: String,
      required: true,
    },
    employment_status: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Intern', 'Other'],
      default: 'Full-time',
    },
  },
  { timestamps: true } // adds createdAt and updatedAt automatically
);

module.exports = mongoose.model('Trainer', trainerSchema);
