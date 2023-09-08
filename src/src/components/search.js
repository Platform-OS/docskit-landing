import React from 'react';
import { Link, useStaticQuery, graphql, withAssetPrefix } from 'gatsby';
import { useFlexSearch } from 'react-use-flexsearch';
import './search.css';

const SearchWrapper = () => {
  const data = useStaticQuery(graphql`
    query SearchIndexQuery {
      localSearchPages {
        publicIndexURL
        publicStoreURL
      }
    }`);

  const { publicIndexURL, publicStoreURL } = data.localSearchPages;

  const [query, setQuery] = React.useState('');
  const [index, setIndex] = React.useState(null);
  const [store, setStore] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all([
        fetch(withAssetPrefix(publicIndexURL)).then(res => res.json()),
        fetch(withAssetPrefix(publicStoreURL)).then(res => res.json()),
      ]);
      setIndex(JSON.stringify(data[0]));
      setStore(data[1]);
    };
    fetchData();
  }, [publicIndexURL, publicStoreURL]);

  if (!!index && !!store) {
    return <Search index={index} store={store} query={query} setQuery={(v) => setQuery(v)} />;
  }

  return <SearchWidget onChange={(v) => setQuery(v)} />;
};

const Search = ({ index, store, query, setQuery }) => {
  const results = useFlexSearch(query, index, store).filter((item) => !!item.slug);

  return (<SearchWidget initialQuery={query} results={results} onChange={(v) => setQuery(v)} />);
};

const SearchWidget = ({ results = [], initialQuery = '', onChange }) => {
  const searchRef = React.useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      onChange('');
    }
  };

  const handleQueryChange = (event) => {
    const value = event.target.value.trim();
    if (value.length) {
      onChange(value);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);


  return (
    <div className="search" ref={searchRef}>
      <form method="get" action="/search/" autoComplete="off">
        <input
          name="q"
          aria-label="Search"
          className="search__input"
          type="search"
          defaultValue={initialQuery}
          onFocus={handleQueryChange}
          onChange={handleQueryChange}
          placeholder="Search..."
          aria-autocomplete="none"
          autoComplete="off"
          autoFocus={!!initialQuery}
        />
      </form>

      {results.length > 0 && (<span className="search__results-count">{results.length} results</span>)}
      {results.length > 0 && (
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

export default SearchWrapper;
