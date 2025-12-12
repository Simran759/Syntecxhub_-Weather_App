const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;


export async function getCurrentWeather(city) {
  if (!API_KEY) {
    throw new Error("Missing API key. Please set VITE_OPENWEATHER_API_KEY in .env.");
  }

  const url = `${API_BASE_URL}/weather?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`;
  console.log("Fetching current weather from URL:", url);

  const res = await fetch(url);
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("City not found. Please check the spelling.");
    }
    throw new Error("Failed to fetch current weather. Please try again.");
  }

  return res.json();
}
