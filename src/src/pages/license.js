import * as React from 'react';
import ThemeProvider from '@platformos/gatsby-theme-platformos-docskit/src/theme/theme-provider';
import Layout from '@components/layout';
import Seo from '@components/seo';
import License from '@partials/license.mdx';

export default function LicensePage({ location }) {
  return (
    <Layout location={location} currentSlug="license" sidebarEnabled tocEnabled={false}>
      <div className="prose max-w-none prose-a:text-interactive-text">
        <License />
      </div>
    </Layout>
  );
}

export const Head = ({ data }) => {
  return (
    <>
      <Seo title="License" description="DoscKit is licensed under the terms of the Creative Commons Attribution 4.0 International License." />
      <ThemeProvider />
    </>
  );
};
