// OpenWeather API configuration
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

const weatherBackgrounds = {
  Clear: 'from-yellow-400 via-orange-400 to-red-400',
  Clouds: 'from-gray-400 via-gray-500 to-gray-600',
  Rain: 'from-blue-700 via-blue-800 to-gray-900',
  Drizzle: 'from-blue-400 via-blue-500 to-blue-600',
  Thunderstorm: 'from-gray-700 via-gray-800 to-black',
  Snow: 'from-blue-100 via-blue-200 to-blue-300',
  Mist: 'from-gray-300 via-gray-400 to-gray-500',
  default: 'from-blue-400 via-blue-500 to-blue-600'
};

export { API_KEY, API_BASE_URL, weatherBackgrounds };
