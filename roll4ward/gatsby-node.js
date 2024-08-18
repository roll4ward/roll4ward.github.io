/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require("path");
const { createFilePath } = require('gatsby-source-filesystem');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug 
            }
          }
        }
      }
    }
    `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/page-template.js`),
      context: { 
        slug: node.fields.slug
      },
    });
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};