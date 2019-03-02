import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import UnderCOnstruction from '../../components/temp-pages/under-construction';

const ShowPage = ({ data }) => (
  <React.Fragment>
    <Layout type="category-page" currentPage="show">
      <SEO
        title="ShowRoom - Frontstack.pl"
        url="https://frontstack.pl/show"
        isBlogPost={false}
      />
      <UnderCOnstruction />
    </Layout>
  </React.Fragment>
);

export default ShowPage;

ShowPage.propTypes = {
  data: PropTypes.object
};

ShowPage.defaultProps = {
  data: {}
};
