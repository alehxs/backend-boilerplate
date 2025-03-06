import React, { useState, useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('http://localhost:3002/weather'); //make sure this matches the port from backend
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div>
      <h1>Houston Weather</h1>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main?.temp} °C</p>
          <p>Condition: {weather.weather?.[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;