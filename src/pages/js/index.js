import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Header from '../../components/header';
import { RecentPosts, SecondLevelPosts, OlderPosts } from '../../components/sections';

function getPostsCount(posts) {
  const count = {};
  for (const post of posts) { // eslint-disable-line
    const subcategory = post.node.tags[1];
    if (count[subcategory]) {
      count[subcategory]++;
    } else {
      count[subcategory] = 1;
    }
  }
  return count;
}

const JSPage = ({ data }) => (
  <React.Fragment>
    {console.log(getPostsCount(data.allPosts.edges))}
    <Layout type="category-page">
      <Header post={data.allPosts.edges[0]} />
      <RecentPosts posts={data.allPosts.edges.slice(1, 3)} />
      <SecondLevelPosts posts={data.allPosts.edges.slice(3, 6)} />
      <OlderPosts posts={data.allPosts.edges.slice(6)} />
    </Layout>
  </React.Fragment>
);

export default JSPage;

export const pageQuery = graphql`
query JSPostsQuery {
  allPosts: allContentfulBlogEntry (
    limit: 100
    filter: {
      node_locale: {eq: "pl-PL"}
      tags: {in: "js"}
    },
    sort: {fields: [createdAt], order: DESC}
  )
  {
    edges {
      node {
        ...BlogPostFields
      }
    }
  }
}
`;

JSPage.propTypes = {
  data: PropTypes.object
};

JSPage.defaultProps = {
  data: {}
};
