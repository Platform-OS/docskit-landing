const path = require("path");
const  { simpleSitemapAndIndex } = require("sitemap");

exports.onPostBuild = async (
  { graphql, reporter, basePath },
  {
    excludes = [],
    output = '/',
    entryLimit = 2500
  }
) => {
  const query = `{
    site {
      siteMetadata {
        siteUrl
      }
    }
    allSitePage {
      nodes {
        path
      }
    }
  }
  `;

  const { data: queryRecords, errors } = await graphql(query);

  if (errors) {
    reporter.panic(
      `GraphQL error:\n`,
      errors
    )
  };

  const siteUrl = queryRecords?.site?.siteMetadata?.siteUrl;

  if (!siteUrl) {
    reporter.panic('Error: cannot resolve siteUrl')
  };

  const allPages = queryRecords?.allSitePage?.nodes;

  const defaultExcludes = [
    `/dev-404-page`,
    `/404`,
    `/404.html`,
    `/offline-plugin-app-shell-fallback`,
  ]

  const excludesArray = [...new Set([...defaultExcludes, ...excludes])];
  const filteredPages = allPages.filter(page => !excludesArray.some(e => page.path.startsWith(e))).map(page => page.path);
  const serializedPages = filteredPages.map(pagePath => ({
    url: `${siteUrl}${pagePath}`,
    changefreq: `daily`,
    priority: 0.7,
  }));

  const sitemapWritePath = path.join(`public`, output)
  const sitemapPublicPath = path.posix.join(basePath, output)

  return simpleSitemapAndIndex({
    hostname: siteUrl,
    publicBasePath: sitemapPublicPath,
    destinationDir: sitemapWritePath,
    sourceData: serializedPages,
    limit: entryLimit,
    gzip: false,
  });
};
