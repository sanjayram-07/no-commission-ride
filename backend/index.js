const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const rideRoutes = require("./routes/rideRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/rideShare", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log(" MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/rides", rideRoutes);

app.listen(5000, () => console.log(" Server running on port 5000"));
