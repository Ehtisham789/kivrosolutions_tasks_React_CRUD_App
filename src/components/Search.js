import React from 'react';

// We pass `searchQuery` and `setSearchQuery` as props from App.js
const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;