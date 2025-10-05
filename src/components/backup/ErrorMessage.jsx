import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="animate-fade-in max-w-md mx-auto">
      <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-white px-6 py-4 rounded-2xl relative mb-6">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-red-400 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Oops! Something went wrong</h3>
            <p className="text-white/80">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
