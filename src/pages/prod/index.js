import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ThumbnailList from '../../components/ThumbnailList';
import Layout from '../../components/layout';
import Header from '../../components/header';
// import UnderCOnstruction from '../../components/temp-pages/under-construction';
import headerFactory from '../../utils/headerFactory';

const pageCategory = 'prod';
const headerData = headerFactory(pageCategory);


const ProdPage = ({ data }) => (
  <React.Fragment>
    <Layout type="category-page" currentPage="prod">
      <Header
        category={pageCategory}
        siteTitle={headerData.title}
        subcategories={headerData.subcategories}
        post={data.allPosts.edges[0]}
      />
      <section className="recent-posts">
        <ThumbnailList posts={data.allPosts.edges.slice(1, 3)} isThumbnail={false} />
      </section>
      <section className="second-level-posts">
        {data.allPosts.edges[3] && (
          <>
            <span className="label-small">Pozostałe wpisy</span>
            <ThumbnailList posts={data.allPosts.edges.slice(3, 6)} type="second-level-posts" />
          </>
        )}
      </section>
      <section className="older-posts">
        <ThumbnailList posts={data.allPosts.edges.slice(6)} />
      </section>
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
