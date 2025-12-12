import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";

import Loader from "./components/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import { getCurrentWeather } from "./utils/weatherApi.js";

function App() {
  const [city, setCity] = useState("Delhi");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    let isCancelled = false;

    async function fetchWeather() {
      if (!city) return;
      setLoading(true);
      setError(null);

      try {
        const [current, forecastData] = await Promise.all([
          getCurrentWeather(city),
          
        ]);

        if (isCancelled) return;

        setCurrentWeather(current);
      
      } catch (err) {
        if (isCancelled) return;
        setError(err.message || "Something went wrong.");
        setCurrentWeather(null);
      
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchWeather();

    return () => {
      isCancelled = true;
    };
  }, [city]);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="app-root">
      <div className="app-container">
        <h1 className="app-title">WeatherNow</h1>

        <SearchBar initialCity={city} onSearch={handleSearch} />

        {loading && <Loader />}

        {error && !loading && <ErrorMessage message={error} />}

        {!loading && !error && currentWeather && (
          <>
            <CurrentWeather data={currentWeather} />
           
          </>
        )}
      </div>
    </div>
  );
}

export default App;
