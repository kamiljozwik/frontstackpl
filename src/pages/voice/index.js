import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import UnderConstruction from '../../components/temp-pages/under-construction';

const VoicePage = ({ data }) => (
  <React.Fragment>
    <Layout type="category-page">
      <SEO
        title="Voice - Frontstack.pl"
        url="https://frontstack.pl/voice"
        isBlogPost={false}
      />
      <UnderConstruction />
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
