const express = require("express");
const router = express.Router();
const Ride = require("../models/Ride");


router.post("/", async (req, res) => {
  try {
    const ride = new Ride(req.body);
    await ride.save();
    res.status(201).send({ message: "Ride posted successfully!" });
  } catch (error) {
    res.status(500).send({ message: "Error posting ride", error });
  }
});

router.get("/", async (req, res) => {
  const rides = await Ride.find();
  res.json(rides);
});

module.exports = router;
