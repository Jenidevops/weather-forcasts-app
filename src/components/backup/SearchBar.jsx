import React from 'react';

const SearchBar = ({ city, setCity, fetchWeather }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div className="max-w-xl mx-auto mb-8 animate-fade-in">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-weather-accent/50 text-lg transition-all pr-14"
        />
        <button
          onClick={fetchWeather}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-weather-accent text-weather-primary rounded-full hover:bg-weather-accent/90 focus:outline-none focus:ring-2 focus:ring-weather-accent transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
};

export default SearchBar;
