import React from 'react';

const WeatherDetails = ({ weather }) => {
  const details = [
    {
      id: 1,
      label: 'Humidity',
      value: `${weather.main.humidity}%`,
      icon: () => <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
      gradient: 'from-blue-500 to-cyan-400',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      id: 2,
      label: 'Wind Speed',
      value: `${(weather.wind.speed * 3.6).toFixed(1)} km/h`,
      icon: () => <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />,
      gradient: 'from-green-500 to-emerald-400',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      id: 3,
      label: 'Pressure',
      value: `${weather.main.pressure} hPa`,
      icon: () => <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
      gradient: 'from-purple-500 to-pink-400',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      id: 4,
      label: 'Visibility',
      value: `${(weather.visibility / 1000).toFixed(1)} km`,
      icon: () => <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>,
      gradient: 'from-orange-500 to-yellow-400',
      bgGradient: 'from-orange-50 to-yellow-50'
    },
    {
      id: 5,
      label: 'Clouds',
      value: `${weather.clouds.all}%`,
      icon: () => <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
      gradient: 'from-gray-500 to-slate-400',
      bgGradient: 'from-gray-50 to-slate-50'
    },
    {
      id: 6,
      label: 'Sunrise',
      value: new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      icon: () => <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
      gradient: 'from-amber-500 to-orange-400',
      bgGradient: 'from-amber-50 to-orange-50'
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Weather Details
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {details.map((detail) => (
          <div key={detail.id} className={`bg-gradient-to-br ${detail.bgGradient} p-6 rounded-2xl shadow-md hover:shadow-xl transition-all`}>
            <div className="flex items-center gap-4">
              <div className={`bg-gradient-to-br ${detail.gradient} text-white p-3 rounded-xl shadow-lg`}>
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {detail.icon}
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1">{detail.label}</p>
                <p className="text-2xl font-bold text-gray-800">{detail.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
