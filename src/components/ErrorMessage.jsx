import React from "react";

function ErrorMessage({ message }) {
  return (
    <div className="error-card">
      <p className="error-text">{message}</p>
    </div>
  );
}

export default ErrorMessage;
