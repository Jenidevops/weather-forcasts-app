import React from 'react';import React from 'react';

import WeatherIcon from './WeatherIcon';import WeatherIcon from './WeatherIcon';



const WeatherCard = ({ weather }) => {const WeatherCard = ({ weather }) => {

  const getAirQualityText = (aqi) => {  const getAirQualityText = (aqi) => {

    const levels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];    const levels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

    return levels[Math.min(Math.floor(aqi / 50), 4)];    return levels[Math.min(Math.floor(aqi / 50), 4)];

  };  };



  return (  return (const WeatherCard = ({ weather }) => {

    <div className="bg-weather-gradient rounded-[40px] shadow-2xl p-8 md:p-12 mb-6 max-w-2xl mx-auto text-white animate-fade-in">  const getAirQualityText = (aqi) => {

      <div className="text-center mb-8 animate-slide-up">    const levels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

        <h2 className="text-4xl md:text-5xl font-bold mb-2">    return levels[Math.min(Math.floor(aqi / 50), 4)];

          {weather.name}, {weather.sys.country}  };

        </h2>

        <div className="flex justify-center items-center gap-4">  return (

          <div className="text-6xl font-bold">    <div className="bg-weather-gradient rounded-[40px] shadow-2xl p-8 md:p-12 mb-6 max-w-2xl mx-auto text-white animate-fade-in">

            {Math.round(weather.main.temp)}°      <div className="text-center mb-8 animate-slide-up">

          </div>        <h2 className="text-4xl md:text-5xl font-bold mb-2">

          <div className="text-xl">          {weather.name}, {weather.sys.country}

            <div>Max: {Math.round(weather.main.temp_max)}°</div>        </h2>

            <div>Min: {Math.round(weather.main.temp_min)}°</div>        <div className="flex justify-center items-center gap-4">

          </div>          <div className="text-6xl font-bold">

        </div>            {Math.round(weather.main.temp)}°

      </div>          </div>

          <div className="text-xl">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">            <div>Max: {Math.round(weather.main.temp_max)}°</div>

        <div className="flex justify-center">            <div>Min: {Math.round(weather.main.temp_min)}°</div>

          <WeatherIcon           </div>

            weatherCode={weather.weather[0].icon}        </div>

            description={weather.weather[0].description}      </div>

          />

        </div>      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

        <div className="flex justify-center">

        <div className="flex flex-col justify-center space-y-6">          <WeatherIcon 

          <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>            weatherCode={weather.weather[0].icon}

            <span>Precipitation</span>            description={weather.weather[0].description}

            <span className="font-bold">{weather.main.humidity}%</span>          />

          </div>        </div>

          

          <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>        <div className="flex flex-col justify-center space-y-6">

            <span>Air Quality</span>          <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>

            <span className="font-bold">{getAirQualityText(weather.main.humidity)}</span>            <span>Precipitation</span>

          </div>            <span className="font-bold">{weather.main.humidity}%</span>

          </div>

          <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl animate-slide-up" style={{ animationDelay: '0.3s' }}>          

            <span>Wind Speed</span>          <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>

            <span className="font-bold">{Math.round(weather.wind.speed)} km/h</span>            <span>Air Quality</span>

          </div>            <span className="font-bold">{getAirQualityText(weather.main.humidity)}</span>

        </div>          </div>

      </div>

          <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl animate-slide-up" style={{ animationDelay: '0.3s' }}>

      <div className="mt-8 p-6 bg-white/10 rounded-3xl animate-slide-up" style={{ animationDelay: '0.4s' }}>            <span>Wind Speed</span>

        <h3 className="text-xl font-bold mb-4">7-Days Forecast</h3>            <span className="font-bold">{Math.round(weather.wind.speed)} km/h</span>

        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-weather-accent/50 scrollbar-track-white/10">          </div>

          {[...Array(7)].map((_, index) => (        </div>

            <div key={index} className="flex-shrink-0 text-center p-4 bg-white/5 rounded-2xl min-w-[100px] hover:bg-white/10 transition-all">      </div>

              <div className="mb-2">{new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</div>

              <WeatherIcon weatherCode={weather.weather[0].icon} description="" />      <div className="mt-8 p-6 bg-white/10 rounded-3xl animate-slide-up" style={{ animationDelay: '0.4s' }}>

              <div className="mt-2">{Math.round(weather.main.temp)}°</div>        <h3 className="text-xl font-bold mb-4">7-Days Forecast</h3>

            </div>        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-weather-accent/50 scrollbar-track-white/10">

          ))}          {[...Array(7)].map((_, index) => (

        </div>            <div key={index} className="flex-shrink-0 text-center p-4 bg-white/5 rounded-2xl min-w-[100px] hover:bg-white/10 transition-all">

      </div>              <div className="mb-2">{new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</div>

              <WeatherIcon weatherCode={weather.weather[0].icon} description="" />

      <div className="grid grid-cols-2 gap-4 mt-8">              <div className="mt-2">{Math.round(weather.main.temp)}°</div>

        <div className="p-4 bg-white/10 rounded-2xl animate-slide-up hover:bg-white/20 transition-all" style={{ animationDelay: '0.5s' }}>            </div>

          <div className="text-sm opacity-80">Sunrise</div>          ))}

          <div className="text-xl font-bold">        </div>

            {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}      </div>

          </div>

        </div>      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="p-4 bg-white/10 rounded-2xl animate-slide-up hover:bg-white/20 transition-all" style={{ animationDelay: '0.6s' }}>        <div className="p-4 bg-white/10 rounded-2xl animate-slide-up hover:bg-white/20 transition-all" style={{ animationDelay: '0.5s' }}>

          <div className="text-sm opacity-80">UV Index</div>          <div className="text-sm opacity-80">Sunrise</div>

          <div className="text-xl font-bold">4 - Moderate</div>          <div className="text-xl font-bold">

        </div>            {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}

      </div>          </div>

    </div>        </div>

  );        <div className="p-4 bg-white/10 rounded-2xl animate-slide-up hover:bg-white/20 transition-all" style={{ animationDelay: '0.6s' }}>

};          <div className="text-sm opacity-80">UV Index</div>

          <div className="text-xl font-bold">4 - Moderate</div>

export default WeatherCard;        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
  );
};

export default WeatherCard;
};

export default WeatherCard;
