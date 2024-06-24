import React from 'react';
import './search.css';

const SearchWrapper = () => (
  <div className="search">
    <form method="get" action="/search/" autoComplete="off">
      <input
        name="query"
        aria-label="Search"
        className="search__input"
        type="search"
        placeholder="Search..."
        aria-autocomplete="none"
        autoComplete="off"
      />
    </form>
  </div>
);

export default SearchWrapper;
