import React from 'react';

const WeatherIcon = ({ weatherCode, description }) => {
  const getWeatherAnimation = () => {
    // Clear sky
    if (weatherCode === '01d' || weatherCode === '01n') {
      return (
        <div className="animate-float">
          <svg className="w-24 h-24 text-weather-accent" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </div>
      );
    }
    // Rain
    if (weatherCode.startsWith('09') || weatherCode.startsWith('10')) {
      return (
        <div className="relative">
          <div className="animate-float">
            <svg className="w-24 h-24 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.5 10A3.5 3.5 0 018 6.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5A3.5 3.5 0 014.5 10z" />
            </svg>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-4 bg-blue-400 rounded-full animate-rain"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      );
    }
    // Wind
    if (weatherCode.startsWith('13')) {
      return (
        <div className="animate-wind">
          <svg className="w-24 h-24 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
          </svg>
        </div>
      );
    }
    // Default/Clouds
    return (
      <div className="animate-float">
        <svg className="w-24 h-24 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 10A3.5 3.5 0 018 6.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5A3.5 3.5 0 014.5 10z" />
        </svg>
      </div>
    );
  };

  return (
    <div className="weather-icon">
      {getWeatherAnimation()}
      <p className="text-white text-lg mt-2 capitalize">{description}</p>
    </div>
  );
};

export default WeatherIcon;