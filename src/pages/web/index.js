import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import { RecentPosts, SecondLevelPosts, OlderPosts } from '../../components/sections';
import Header from '../../components/header';

const WEBPage = ({ data }) => (
  <React.Fragment>
    <Layout type="category-page">
      <Header post={data.allPosts.edges[0]} />
      <RecentPosts posts={data.allPosts.edges.slice(1, 3)} />
      <SecondLevelPosts posts={data.allPosts.edges.slice(3, 6)} />
      <OlderPosts posts={data.allPosts.edges.slice(6)} />
    </Layout>
  </React.Fragment>
);

export default WEBPage;

export const pageQuery = graphql`
query WebPostsQuery {
  allPosts: allContentfulBlogEntry (
    limit: 100
    filter: {
      node_locale: {eq: "pl-PL"}
      tags: {in: "web"}
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

WEBPage.propTypes = {
  data: PropTypes.object
};

WEBPage.defaultProps = {
  data: {}
};
