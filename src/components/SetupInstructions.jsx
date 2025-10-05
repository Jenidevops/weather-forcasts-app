import React from 'react';

const SetupInstructions = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-yellow-500 rounded-2xl p-8 shadow-lg">
      <div className="flex items-start gap-4">
        <svg className="w-10 h-10 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 000 16zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-yellow-800 mb-4">Setup Instructions</h3>
          <div className="space-y-3 text-yellow-800">
            <div className="flex items-start gap-3">
              <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">1</span>
              <p>Visit <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-yellow-900">OpenWeatherMap API</a> and create a free account</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">2</span>
              <p>Generate your API key from the dashboard</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">3</span>
              <p>Add your API key to the <code className="bg-yellow-200 px-2 py-1 rounded font-mono text-sm">API_KEY</code> constant at the top of this code</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">4</span>
              <p>Start searching for weather data!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupInstructions;
