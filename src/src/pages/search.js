import * as React from 'react';
import { Link, graphql } from 'gatsby';
import ThemeProvider from '@platformos/gatsby-theme-platformos-docskit/src/theme/theme-provider';
import queryString from 'query-string';
import Layout from '@components/layout';
import Seo from '@components/seo';
import { useFlexSearch } from 'react-use-flexsearch';

export default function SearchPage({ data, location, pageContext }) {
  const [query, setQuery] = React.useState(null);
  const { navigationTree, metaData } = pageContext;
  const { localSearchPages: { index, store } } = data;
  const results = useFlexSearch(query, index, store).filter((item) => !!item.slug);

  React.useEffect(() => {
    const { q: query } = queryString.parse(location.search);
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
        {(query !== null) ? (<>
          <div className="mb-8 text-supplementary">{results.length} results</div>
          <ul className="">
            {results.map((item) => (
              <li key={item.slug} className="mb-4 py-4 border-b">
                <Link to={`/${item.slug}`}>{item.title}</Link>
                <div className="text-sm text-supplementary mb-4">{item.description}</div>
              </li>
            ))}
          </ul>
        </>) : (
          <div className="mb-8 text-supplementary">Loading results...</div>
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

export const pageQuery = graphql`
  query {
    localSearchPages {
      index
      store
    }
  }
`;
