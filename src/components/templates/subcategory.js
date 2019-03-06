import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layout';
import SEO from '../SEO';
import ThumbnailList from '../ThumbnailList';
import Header from '../header';
import headerFactory from '../../utils/headerFactory';

function Subcategory({ data }) {
  const category = data.allPosts.edges[0].node.tags[0];
  const subcategory = data.allPosts.edges[0].node.tags[1];
  const headerData = headerFactory(category);
  const printSubcategory = headerData.subcategories.filter(item => Object.keys(item)[0] === subcategory)[0][subcategory];

  return (
    <>
      <Layout type="category-page category-page__subcategories">
        <SEO
          title={`${headerData.title} - Frontstack.pl`}
          url={`https://frontstack.pl/${category}/${subcategory}`}
          isBlogPost={false}
        />
        <Header post={data.allPosts.edges[0]} />
        <section className="older-posts">
          <span className="label-small">{ printSubcategory }</span>
          <ThumbnailList posts={data.allPosts.edges.slice(1)} type="older-posts" />
        </section>
      </Layout>
    </>
  );
}

export default Subcategory;

Subcategory.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
query tagQuery($subcategory: [String]) {
  allPosts: allContentfulBlogEntry (
    limit: 100
    filter: {
      node_locale: {eq: "pl-PL"}
      tags: {in: $subcategory}
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
