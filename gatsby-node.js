const path = require('path');
const _ = require('lodash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/components/templates/blogPost.js`);
    resolve(
      graphql(`
        {
          allContentfulBlogEntry(limit: 100) {
            edges {
              node {
                id 
                slug
                tags
              }
            }
          }
        }
    `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        const tags = {};
        // Create blog post pages.
        result.data.allContentfulBlogEntry.edges.forEach((edge) => {
          createPage({
            path: `/${edge.node.tags[0]}/post/${edge.node.slug}`, // required
            component: blogPostTemplate,
            context: {
              // Add optional context data. Data can be used as arguments to the page GraphQL query.
              // The page "path" is always available as a GraphQL argument.(AND `props.pageContext`)
              slug: edge.node.slug,
              disqusShortName: process.env.DISQUS_SHORT_NAME
            },
          });

          const category = edge.node.tags[0];
          const subCategory = edge.node.tags[1];

          if (_.has(tags, category)) {
            tags[category].indexOf(subCategory) === -1 ? tags[category].push(subCategory) : null; // eslint-disable-line
          } else {
            tags[category] = [subCategory];
          }
        });

        // Create subcategories pages
        _.forOwn(tags, (subCategoryArray, category) => {
          subCategoryArray.forEach((subcategory) => {
            const subcategoryPath = `/${category}/${subcategory}/`;
            createPage({
              path: subcategoryPath,
              component: path.resolve(`src/components/templates/subcategory.js`),
              context: {
                subcategory
              },
            });
          });
        });
        // return;
      })
    );
    // Toolbox pages for categories
    resolve(
      graphql(`
        {
          allContentfulToolEntry(limit: 100) {
            edges {
              node {
                id 
                category
              }
            }
          }
        }
    `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        const categories = [];
        result.data.allContentfulToolEntry.edges.forEach((edge) => {
          const { category } = edge.node;
          categories.push(category);
        });

        // Create subcategories toolbox pages
        _.uniq(categories).forEach((category) => {
          const toolsPath = `/${category}/toolbox/`;
          createPage({
            path: toolsPath,
            component: path.resolve(`src/components/templates/toolbox.js`),
            context: {
              category
            },
          });
        });
        // return;
      })
    );
  });
};
