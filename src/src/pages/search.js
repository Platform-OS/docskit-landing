import * as React from 'react';
import { Link, graphql } from 'gatsby';
import queryString from 'query-string';
import ThemeProvider from '@platformos/gatsby-theme-platformos-docskit/src/theme/theme-provider';
import Layout from '@components/layout';
import Seo from '@components/seo';
import useCustomSearch from '../hooks/useCustomSearch';

export default function SearchPage({ location, pageContext }) {
  const [query, setQuery] = React.useState(null);
  const { navigationTree, metaData } = pageContext;
  const { results, error, loading } = useCustomSearch(query);

  React.useEffect(() => {
    const { query } = queryString.parse(location.search);
    setQuery(query || '');
  }, [location.search]);

  return (
    <Layout
      location={location}
      currentSlug="search"
      sidebarEnabled
      tocEnabled={false}
      treeData={navigationTree}
      metaData={metaData}
    >

      <div>
        <h1 className="text-3xl font-bold">Search results</h1>
        <h2 className="text-2xl font-bold pb-4">{query ? `for "${query}"` : ''}</h2>
        {(results !== null) ? (<>
          <div className="mb-8 text-supplementary">{results.length} results</div>
          <ul className="">
            {results.map((item) => (
              <li key={item.slug} className="mb-4 py-4 border-b">
                <Link to={item.href}>{item.title}</Link>
                {item.description ? <div className="text-sm text-supplementary mb-4">{item.description}</div> : null}
              </li>
            ))}
          </ul>
        </>) :
          (
            <div className="mb-8 text-supplementary">
              { !!loading && 'Loading results...' }
              { !!error && 'Error loading results' }
            </div>
          )}
      </div>
    </Layout>
  );
}

export const Head = ({ pageContext }) => {
  const { metaData } = pageContext;
  return (
    <>
      <Seo title="Search" description="Search results" meta={metaData} />
      <meta name="robots" content="noindex" />
      <ThemeProvider />
    </>
  );
};

