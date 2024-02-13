// src/App.js
import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const searchWeather = async () => {
    // Implement the weather API call here
    // Update the weatherData state with the fetched data
  };

  return (
    <div className='App'>
      <h1>Weather App</h1>
      <div>
        <input
          type='text'
          placeholder='Enter city name'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={searchWeather}>Search</button>
      </div>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          {/* Display other weather information as needed */}
        </div>
      )}
    </div>
  );
}

export default App;
