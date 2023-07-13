import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ThemeProvider from '@platformos/gatsby-theme-platformos-docskit/src/theme/theme-provider';
import queryString from 'query-string';
import Layout from '@components/layout';
import Seo from '@components/seo';
import { useFlexSearch } from 'react-use-flexsearch';

export default function SearchPage({ location }) {
  const [query, setQuery] = React.useState('');
  const data = useStaticQuery(graphql`
  query SearchIndexQuery {
    localSearchPages {
      index
      store
    }
  }`);
  const { index, store } = data.localSearchPages;
  const results = useFlexSearch(query, index, store).filter((item) => !!item.slug);

  React.useEffect(() => {
    const { q: query } = queryString.parse(location.search);
    setQuery(query || '');
  }, [location.search]);

  return (
    <Layout location={location} currentSlug="search" sidebarEnabled tocEnabled={false}>
      <div>
        <h1 className="text-3xl font-bold">Search results</h1>
        <h2 className="text-2xl font-bold pb-4">{query ? `for "${query}"` : ''}</h2>
        <div className="mb-8 text-supplementary">{results.length} results</div>
        <ul className="">
          {results.map((item) => (
            <li key={item.slug} className="mb-4 py-4 border-b">
              <Link to={`/${item.slug}`}>{item.title}</Link>
              <div className="text-sm text-supplementary mb-4">{item.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const Head = ({ data }) => {
  return (
    <>
      <Seo title="Search" description="Search results" />
      <meta name="robots" content="noindex" />
      <ThemeProvider />
    </>
  );
};
