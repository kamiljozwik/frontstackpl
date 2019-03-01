import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import UnderConstruction from '../../components/temp-pages/under-construction';

const APIPage = ({ data }) => (
  <React.Fragment>
    <Layout type="category-page">
      <UnderConstruction />
    </Layout>
  </React.Fragment>
);

export default APIPage;

export const pageQuery = graphql`
query apiQuery {
  allPosts: allContentfulBlogEntry (
    limit: 100
    filter: {
      node_locale: {eq: "pl-PL"}
      tags: {in: "api"}
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

APIPage.propTypes = {
  data: PropTypes.object
};

APIPage.defaultProps = {
  data: {}
};
