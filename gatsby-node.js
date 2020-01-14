/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "../../theme.config$": path.join(
          __dirname,
          "src/semantic/theme.config"
        ),
      },
    },
  })
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const response = await graphql(`
    query {
      allContentfulBLogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBLogPost.edges.forEach(e => {
    createPage({
      component: blogTemplate,
      path: `/about/${e.node.slug}`,
      context: {
        slug: e.node.slug,
      },
    })
  })
}
