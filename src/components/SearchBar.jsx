import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path className="search-lupa" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15.5 14h-.79l-.28-.27c1.15-1.3 1.82-3.01 1.57-4.82-.36-2.93-2.93-5.22-5.9-4.86-2.93.36-5.22 2.93-4.86 5.9.34 2.76 2.66 4.94 5.42 5.09 1.67.09 3.25-.45 4.51-1.39l.26.3v.89l4.25 4.24 1.41-1.41L15.5 14zM6.5 9C4 9 2 7 2 4.5S4 0 6.5 0 11 2 11 4.5 9 9 6.5 9zm0-1C8.43 8 10 6.43 10 4.5S8.43 1 6.5 1 3 2.57 3 4.5 4.57 8 6.5 8z"
            />
          </svg>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
