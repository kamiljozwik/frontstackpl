import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Header from '../../components/header';
import UnderCOnstruction from '../../components/temp-pages/under-construction';
import headerFactory from '../../utils/headerFactory';

const pageCategory = 'api';
const headerData = headerFactory(pageCategory);

const APIPage = ({ data }) => (
  <React.Fragment>
    {/* <Header
      category={pageCategory}
      siteTitle={headerData.title}
      subcategories={headerData.subcategories}
      post={data.allPosts.edges[0]}
    /> */}
    <Layout type="category-page" currentPage="api">
      <UnderCOnstruction />
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
