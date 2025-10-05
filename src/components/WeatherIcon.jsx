import React from 'react';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightCloudy, 
         WiCloud, WiCloudy, WiRain, WiRainMix, WiThunderstorm, 
         WiSnow, WiDust } from 'react-icons/wi';

const WeatherIcon = ({ weatherCode, description }) => {
  const getIcon = () => {
    // Map weather codes to Weather Icons
    const iconMap = {
      '01d': <WiDaySunny className="text-yellow-300 animate-weather-icon" />,
      '01n': <WiNightClear className="text-blue-200 animate-weather-icon" />,
      '02d': <WiDayCloudy className="text-gray-200 animate-weather-icon" />,
      '02n': <WiNightCloudy className="text-gray-300 animate-weather-icon" />,
      '03d': <WiCloud className="text-gray-300 animate-weather-icon" />,
      '03n': <WiCloud className="text-gray-400 animate-weather-icon" />,
      '04d': <WiCloudy className="text-gray-400 animate-weather-icon" />,
      '04n': <WiCloudy className="text-gray-500 animate-weather-icon" />,
      '09d': <WiRain className="text-blue-400 animate-weather-icon" />,
      '09n': <WiRain className="text-blue-500 animate-weather-icon" />,
      '10d': <WiRainMix className="text-blue-400 animate-weather-icon" />,
      '10n': <WiRainMix className="text-blue-500 animate-weather-icon" />,
      '11d': <WiThunderstorm className="text-yellow-400 animate-weather-icon" />,
      '11n': <WiThunderstorm className="text-yellow-500 animate-weather-icon" />,
      '13d': <WiSnow className="text-white animate-weather-icon" />,
      '13n': <WiSnow className="text-gray-100 animate-weather-icon" />,
      '50d': <WiDust className="text-gray-400 animate-weather-icon" />,
      '50n': <WiDust className="text-gray-500 animate-weather-icon" />
    };

    return iconMap[weatherCode] || iconMap['01d'];
  };

  return (
    <div className="weather-icon-container">
      <div className="weather-icon text-8xl" title={description}>
        {getIcon()}
      </div>
    </div>
  );
};

export default WeatherIcon;
