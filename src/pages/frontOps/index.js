import React from 'react';
import PropTypes from 'prop-types';
// import ThumbnailList from '../../components/ThumbnailList';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Header from '../../components/header';
import UnderCOnstruction from '../../components/temp-pages/under-construction';
import headerFactory from '../../utils/headerFactory';

const pageCategory = 'frontops';
const headerData = headerFactory(pageCategory);


const FrontOpsPage = ({ data }) => (
  <React.Fragment>
    {/* <Header
      category={pageCategory}
      siteTitle={headerData.title}
      subcategories={headerData.subcategories}
      post={data.allPosts ? data.allPosts.edges[0] : []}
    /> */}
    <Layout type="category-page" currentPage="frontOps">
      <UnderCOnstruction />
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
