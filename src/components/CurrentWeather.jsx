import React from "react";

function CurrentWeather({ data }) {
  const {
    name,
    main: { temp, humidity } = {},
    weather = [],
    wind: { speed } = {},
  } = data;

  const condition = weather[0];
  const iconUrl = condition
    ? `https://openweathermap.org/img/wn/${condition.icon}@2x.png`
    : "";

  return (
    <div className="card current-weather-card">
      <div className="current-header">
        <div>
          <h2 className="city-name">{name}</h2>
          {condition && <p className="condition-text">{condition.main}</p>}
        </div>
        {iconUrl && (
          <img src={iconUrl} alt={condition.description} className="condition-icon" />
        )}
      </div>

      <div className="current-main">
        <div className="temperature">
          {typeof temp === "number" ? `${Math.round(temp)}°C` : "--"}
        </div>
        <div className="current-details">
          <div className="detail-item">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">
              {typeof humidity === "number" ? `${humidity}%` : "--"}
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Wind</span>
            <span className="detail-value">
              {typeof speed === "number" ? `${Math.round(speed)} m/s` : "--"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
