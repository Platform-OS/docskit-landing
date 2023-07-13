import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { useFlexSearch } from 'react-use-flexsearch';
import './search.css';

const Search = () => {
  const data = useStaticQuery(graphql`
    query SearchIndexQuery {
      localSearchPages {
        index
        store
      }
    }`);

  const searchRef = React.useRef(null);
  const { index, store } = data.localSearchPages;
  const [query, setQuery] = React.useState('');
  const results = useFlexSearch(query, index, store).filter((item) => !!item.slug);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setQuery('');
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });


  return (
    <div className="search" ref={searchRef}>
      <form method="get" action="/search/" autoComplete="off">
        <input
          name="q"
          aria-label="Search"
          className="search__input"
          type="search"
          onFocus={handleQueryChange}
          onChange={handleQueryChange}
          placeholder="Search..."
          aria-autocomplete="none"
          autoComplete="off"
        />
      </form>

      {query.length > 0 && (<span className="search__results-count">{results.length} results</span>)}
      {results.length > 0 && query.length > 0 && (
        <div className="search__results-wrapper">
          <ul className="search__results">
            {results.map((item) => (
              <li className="search__results-item" key={item.id}>
                <Link to={item.slug}>{item.title}</Link> <small>{item.slug}</small>

                <div><small>{item.description}</small></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
