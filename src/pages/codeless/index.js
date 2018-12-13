import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ThumbnailList from '../../components/ThumbnailList';
import Layout from '../../components/layout';
import Header from '../../components/header';
import headerFactory from '../../utils/headerFactory';

const pageCategory = 'codeless';
const headerData = headerFactory(pageCategory);

const Codeless = ({ data }) => data.CodelessPosts && (
  <React.Fragment>
    <Layout type="category-page" currentPage="codeless">
      <Header
        category={pageCategory}
        siteTitle={headerData.title}
        subcategories={headerData.subcategories}
        post={data.CodelessPosts.edges[0]}
      />
      <section className="recent-posts">
        <ThumbnailList posts={data.CodelessPosts.edges.slice(1, 3)} isThumbnail={false} />
      </section>
      <section className="second-level-posts">
        <span className="label-small">Pozostałe wpisy</span>
        <ThumbnailList posts={data.CodelessPosts.edges.slice(3, 6)} />
      </section>
      <section className="older-posts">
        <ThumbnailList posts={data.CodelessPosts.edges.slice(6)} />
      </section>
    </Layout>
  </React.Fragment>
);

export default Codeless;

export const pageQuery = graphql`
query CodelessPostsQuery {
  CodelessPosts: allContentfulBlogEntry (
    limit: 100
    filter: {
      node_locale: {eq: "pl-PL"}
      tags: {in: "codeless"}
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

Codeless.propTypes = {
  data: PropTypes.object
};

Codeless.defaultProps = {
  data: {}
};
