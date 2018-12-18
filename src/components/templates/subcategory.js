import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layout';
import ThumbnailList from '../ThumbnailList';
import Header from '../header';
import headerFactory from '../../utils/headerFactory';

class Subcategory extends Component {
  constructor(props) {
    super(props);
    this.category = props.data.allPosts.edges[0].node.tags[0];
    this.subcategory = props.data.allPosts.edges[0].node.tags[1];
    this.headerData = headerFactory(this.category);
  }

  render() {
    return (
      <>
        <Layout type="category-page category-page__subcategories" currentPage={this.category}>
          <Header
            siteTitle={this.headerData.title}
            category={this.category}
            currentSubcategory={this.subcategory}
            subcategories={this.headerData.subcategories}
            post={this.props.data.allPosts.edges[0]}
          />
          <section className="older-posts">
            <span className="label-small">{ this.subcategory }</span>
            <ThumbnailList posts={this.props.data.allPosts.edges.slice(1)} type="older-posts" />
          </section>
        </Layout>
        </>
    );
  }
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
