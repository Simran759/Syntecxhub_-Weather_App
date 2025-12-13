# WeatherNow – React Weather Forecast App

A clean, modern, and responsive weather app built with **React + Vite** and **CSS**, showing current conditions and a 5‑day forecast.

Visit here https://syntecxhub-weather-app.vercel.app/
---

## ✨ Features

- City search with auto‑focus input
- Current weather:
  - City name
  - Temperature (°C)
  - Weather condition + icon
  - Humidity
  - Wind speed

- Loading indicator while fetching
- User‑friendly error messages for:
  - Invalid city
  - Network/API errors
- Fully responsive, centered card layout

---

## 🧱 Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS (custom, no framework)
- OpenWeatherMap API

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd <your-repo-folder>
npm install
```
### 2. Environment variables
Create a `.env` file at the project root:

VITE_OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
> Make sure the key is valid and activated on your OpenWeather account.

### 3.  Run the dev server
```bash
npm run dev
```
## 📁 Project Structure


```bash
src/
  main.jsx
  App.jsx

  components/
    SearchBar.jsx
    CurrentWeather.jsx
    Loader.jsx
    ErrorMessage.jsx

  styles/
    App.css

  utils/
    weatherApi.js
```

---

## 🔌 API Usage

The app uses **OpenWeatherMap**:

- Current weather endpoint:
  - `https://api.openweathermap.org/data/2.5/weather`


`weatherApi.js` exposes:

- `getCurrentWeather(city)`


This use `import.meta.env.VITE_OPENWEATHER_API_KEY` for the API key.

---

## 🧠 React Hooks

Main hooks in `App.jsx`:

- `useState` manages:
  - `city`
  - `currentWeather`
  - `forecast`
  - `loading`
  - `error`
- `useEffect` with `[city]`:
  - Fetches current weather and forecast on:
    - Initial load (default `"Delhi"`)
    - Every time the user searches a new city

---

## 🎨 UI / Layout

- Centered card on desktop:
  - `app-root` uses flexbox to center vertically + horizontally
  - `app-container` is a max‑width card with rounded corners and shadow
- Mobile‑friendly:
  - Full width on small screens
  - Grid forecast collapses to 2 columns on small screens, 5 on desktop
- Soft gradient background and weather icons from OpenWeather

---


