import React from "react";

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-spinner"></div>
      <p className="loader-text">Loading weather data...</p>
    </div>
  );
}

export default Loader;
