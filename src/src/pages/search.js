import * as React from 'react';
import { Link, graphql } from 'gatsby';
import ThemeProvider from '@platformos/gatsby-theme-platformos-docskit/src/theme/theme-provider';
import Layout from '@components/layout';
import Seo from '@components/seo';


export default function SearchPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold">Search results</h1>

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
