const latitude = 0; // latitude of city
const longitude = 0; // longitude of city

const API_KEY = "";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`;

// Let's start creating an express app here!