const path = require('path');

module.exports = {
  assetPrefix: 'https://uploads.staging.oregon.platform-os.com/instances/9753/assets/',
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
    '@platformos/gatsby-plugin-posify',
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
  ],
}