const express = require("express");

const PORT = 3001;

const API_KEY = "";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=29.7604&lon=-95.3698&appid=${API_KEY}&units=imperial`;

const app = express();
app.use(express.json());

app.use();

app.use("/", (req, res) => {
  res.send("Welcome to the server :)");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
