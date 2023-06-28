const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'platformOS DocsKit',
    description: 'platformOS DocsKit',
    author: 'platformOS'
  },
    plugins: [
      {
        resolve: '@platformos/gatsby-theme-platformos-docskit',
        options: {
          showFullNavigation: true
        }
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: 'platformOS DocsKit',
          short_name: 'DocsKit',
          start_url: '/',
          background_color: '#663399',
          display: 'minimal-ui',
          icon: path.join(__dirname, 'src/images/favicon.png'), // This path is relative to the root of the site.
        },
      },
    ],
  }
