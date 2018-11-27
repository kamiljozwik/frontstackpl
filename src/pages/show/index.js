import React from 'react';
import PropTypes from 'prop-types';
// import ThumbnailList from '../../components/ThumbnailList';
import Layout from '../../components/layout';
import Header from '../../components/header';
import UnderCOnstruction from '../../components/temp-pages/under-construction';
import headerFactory from '../../utils/headerFactory';

const pageCategory = 'show';
const headerData = headerFactory(pageCategory);


const ShowPage = ({ data }) => (
  <React.Fragment>
    {/* <Header
      category={pageCategory}
      siteTitle={headerData.title}
      subcategories={headerData.subcategories}
    /> */}
    <Layout type="category-page" currentPage="show">
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
