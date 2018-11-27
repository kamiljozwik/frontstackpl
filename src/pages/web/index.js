import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ThumbnailList from '../../components/ThumbnailList';
import Layout from '../../components/layout';
import Header from '../../components/header';
import headerFactory from '../../utils/headerFactory';

const pageCategory = 'web';
const headerData = headerFactory(pageCategory);

const WEBPage = ({ data }) => (
  <React.Fragment>
    <Layout type="category-page" currentPage="web">
      <Header
        category={pageCategory}
        siteTitle={headerData.title}
        subcategories={headerData.subcategories}
        post={data.allPosts.edges[0]}
      />
      <section className="recent-posts">
        <ThumbnailList posts={data.allPosts.edges.slice(1, 3)} type="recent-posts" />
      </section>
      <section className="second-level-posts">
        {data.allPosts.edges[3] && (
          <>
            <span className="label__small">Pozostałe wpisy</span>
            <ThumbnailList posts={data.allPosts.edges.slice(3, 7)} type="second-level-posts" />
          </>
        )}
      </section>
      <section className="older-posts">
        <ThumbnailList posts={data.allPosts.edges.slice(7, 11)} type="older-posts" />
      </section>
    </Layout>
  </React.Fragment>
);

export default WEBPage;

export const pageQuery = graphql`
query WebPostsQuery {
  allPosts: allContentfulBlogEntry (
    limit: 100
    filter: {
      node_locale: {eq: "pl-PL"}
      tags: {in: "web"}
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

WEBPage.propTypes = {
  data: PropTypes.object
};

WEBPage.defaultProps = {
  data: {}
};
