const path = require('path');

module.exports = {
  assetPrefix: process.env.ASSET_PREFIX,
  siteMetadata: {
    title: 'platformOS DocsKit',
    description: 'platformOS DocsKit',
    author: 'platformOS',
    siteUrl: 'https://docskit.platformos.com'
  },
  plugins: [
    {
      resolve: '@platformos/gatsby-theme-platformos-docskit',
      options: {
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
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward'
        },
        query: `
        {
          allMdx {
            nodes {
              id
              body
              frontmatter {
                title
                description
                slug
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['title', 'body', 'description'],
        store: ['id', 'slug', 'title', 'description'],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            slug: node.frontmatter.slug,
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            body: node.body
          })),
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `docskit.platformos.com`,
      },
    },
    'gatsby-plugin-sitemap',
    '@platformos/gatsby-plugin-posify'
  ],
}
