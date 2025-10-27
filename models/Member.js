const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  plan: { type: String, required: true },
  wantTrainer: { type: Boolean, default: false },
  trainerId: { type: Number, default: null },
  paymentStatus: { type: String, required: true },
  joinDate: { type: String, required: true },
  endDate: { type: String, required: true }
});

module.exports = mongoose.model('Member', memberSchema);
