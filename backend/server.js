const express = require("express");
const cors = require("cors");

const PORT = 3001;

const latitude = 0;
const longitude = 0;

const API_KEY = "";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`;

const app = express();
app.use(cors());