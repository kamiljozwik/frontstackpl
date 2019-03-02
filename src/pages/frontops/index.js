import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import { RecentPosts, SecondLevelPosts, OlderPosts } from '../../components/sections';
import Header from '../../components/header';

const FrontOpsPage = ({ data }) => (
  <React.Fragment>
    <Layout type="category-page">
      <SEO
        title="FrontOps - Frontstack.pl"
        url="https://frontstack.pl/frontops"
        isBlogPost={false}
      />
      <Header post={data.allPosts.edges[0]} />
      <RecentPosts posts={data.allPosts.edges.slice(1, 3)} />
      <SecondLevelPosts posts={data.allPosts.edges.slice(3, 6)} />
      <OlderPosts posts={data.allPosts.edges.slice(6)} />
    </Layout>
  </React.Fragment>
);

export default FrontOpsPage;

export const pageQuery = graphql`
query frontopsPostsQuery {
  allPosts: allContentfulBlogEntry (
    limit: 100
    filter: {
      node_locale: {eq: "pl-PL"}
      tags: {in: "frontops"}
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

FrontOpsPage.propTypes = {
  data: PropTypes.object
};

FrontOpsPage.defaultProps = {
  data: {}
};
