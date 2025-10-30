const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post("/reserve", (req, res) => {
  const data = req.body;
  let reservations = [];

  if (fs.existsSync("reservations.json")) {
    reservations = JSON.parse(fs.readFileSync("reservations.json"));
  }

  reservations.push(data);
  fs.writeFileSync("reservations.json", JSON.stringify(reservations, null, 2));

  res.json({ message: "Reservation received successfully!" });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

