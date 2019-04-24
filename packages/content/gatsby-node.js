// const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allMdx {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).catch(error => console.error(error));
  data.allMdx.edges.forEach(({ node }) => {
    const tutorialType = path.basename(path.dirname(node.fileAbsolutePath));
    console.log(tutorialType);
    createPage({
      path: `/${tutorialType}${node.frontmatter.path}`,
      component: node.fileAbsolutePath,
      context: {
        pagePath: node.frontmatter.path,
      },
    });
  });
};
