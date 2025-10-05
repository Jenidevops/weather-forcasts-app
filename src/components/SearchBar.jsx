import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-6 py-4 bg-black/20 backdrop-blur-xl text-white rounded-2xl
                    placeholder-white/80 outline-none focus:ring-2 focus:ring-white/40
                    transition-all duration-300 shadow-lg border border-white/20
                    bg-glass-gradient font-medium"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80
                     hover:text-white transition-colors duration-300"
          aria-label="Search"
        >
          <FiSearch size={24} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
