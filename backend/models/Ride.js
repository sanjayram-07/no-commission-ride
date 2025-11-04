const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  pickupPoint: { type: String, required: true },
  seats: { type: Number, required: true },
  contactNumber: { type: String, required: true },
});

module.exports = mongoose.model("Ride", rideSchema);
