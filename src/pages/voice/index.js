import React from 'react';
import PropTypes from 'prop-types';
// import ThumbnailList from '../../components/ThumbnailList';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Header from '../../components/header';
import UnderCOnstruction from '../../components/temp-pages/under-construction';
import headerFactory from '../../utils/headerFactory';

const pageCategory = 'voice';
const headerData = headerFactory(pageCategory);


const VoicePage = ({ data }) => (
  <React.Fragment>
    {/* <Header
      category={pageCategory}
      siteTitle={headerData.title}
      subcategories={headerData.subcategories}
    /> */}
    <Layout type="category-page" currentPage="voice">
      <UnderCOnstruction />
    </Layout>
  </React.Fragment>
);

export default VoicePage;

export const pageQuery = graphql`
query VoicePostsQuery {
  allPosts: allContentfulBlogEntry (
    limit: 100
    filter: {
      node_locale: {eq: "pl-PL"}
      tags: {in: "voice"}
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

VoicePage.propTypes = {
  data: PropTypes.object
};

VoicePage.defaultProps = {
  data: {}
};
