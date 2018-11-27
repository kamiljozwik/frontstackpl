import React from 'react';
import PropTypes from 'prop-types';
// import ThumbnailList from '../../components/ThumbnailList';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Header from '../../components/header';
import UnderCOnstruction from '../../components/temp-pages/under-construction';
import headerFactory from '../../utils/headerFactory';

const pageCategory = 'prod';
const headerData = headerFactory(pageCategory);


const ProdPage = ({ data }) => (
  <React.Fragment>
    {/* <Header
      category={pageCategory}
      siteTitle={headerData.title}
      subcategories={headerData.subcategories}
    /> */}
    <Layout type="category-page underConstruction" currentPage="prod">
      <UnderCOnstruction />
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
