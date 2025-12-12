import React, { useState, useEffect, useRef } from "react";

function SearchBar({ initialCity, onSearch }) {
  const [inputValue, setInputValue] = useState(initialCity || "");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Enter city name..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
