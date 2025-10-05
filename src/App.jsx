import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import WeatherCard from './components/WeatherCard';
import SetupInstructions from './components/SetupInstructions';
import { API_BASE_URL } from './constants';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setError('Please enter a city name');
      return;
    }


    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city: query })
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found. Please check the spelling and try again.');
        } else if (response.status === 401) {
          throw new Error('Invalid API key. Please check your API configuration.');
        } else if (response.status === 429) {
          throw new Error('Too many requests. Please try again later.');
        } else {
          throw new Error('Failed to fetch weather data. Please try again later.');
        }
      }

      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-slate-800 text-white bg-fixed relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-600/20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-700/20 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative backdrop-blur-sm">
        <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />
        {error && <ErrorMessage message={error} />}
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-blue-300/30 animate-spin">
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-blue-400 animate-spin"></div>
              </div>
            </div>
          </div>
        ) : weather ? (
          <WeatherCard weather={weather} />
        ) : null
        ) : null}
      </main>
      </div>
    </div>
  );
}

export default App;
