import React from 'react';

const Header = () => {
  return (
    <header className="text-center py-8 px-4 bg-black/20 backdrop-blur-sm">
      <div className="animate-fade-in">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="relative opacity-90">
            <div className="transform transition-transform duration-3000 hover:scale-110">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Weather
            <span className="text-blue-400 ml-2 drop-shadow-lg">ForeCasts</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
