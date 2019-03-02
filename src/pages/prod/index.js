import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { RecentPosts, SecondLevelPosts, OlderPosts } from '../../components/sections';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import Header from '../../components/header';

const ProdPage = ({ data }) => (
  <React.Fragment>
    <Layout type="category-page">
      <SEO
        title="Produktywność - Frontstack.pl"
        url="https://frontstack.pl/prod"
        isBlogPost={false}
      />
      <Header post={data.allPosts.edges[0]} />
      <RecentPosts posts={data.allPosts.edges.slice(1, 3)} />
      <SecondLevelPosts posts={data.allPosts.edges.slice(3, 6)} />
      <OlderPosts posts={data.allPosts.edges.slice(6)} />
    </Layout>
  </React.Fragment>
);

export default ProdPage;

export const pageQuery = graphql`
query prodQuery {
  allPosts: allContentfulBlogEntry (
    limit: 100
    filter: {
      node_locale: {eq: "pl-PL"}
      tags: {in: "prod"}
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

ProdPage.propTypes = {
  data: PropTypes.object
};

ProdPage.defaultProps = {
  data: {}
};
