import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layout';
import SEO from '../SEO';
import ThumbnailList from '../ThumbnailList';
import Header from '../header';
import headerFactory from '../../utils/headerFactory';

class Subcategory extends Component {
  constructor(props) {
    super(props);
    this.category = props.data.allPosts.edges[0].node.tags[0];
    this.subcategory = props.data.allPosts.edges[0].node.tags[1];
    this.headerData = headerFactory(this.category);
    this.printSubcategory = this.headerData.subcategories.filter(item => Object.keys(item)[0] === this.subcategory)[0][this.subcategory];
  }

  render() {
    return (
      <>
        <Layout type="category-page category-page__subcategories">
          <SEO
            title={this.headerData.title} description="" image=""
            url={`https://frontstack.pl/${this.category}/${this.subcategory}`} keywords={[]}
          />
          <Header post={this.props.data.allPosts.edges[0]} />
          <section className="older-posts">
            <span className="label-small">{ this.printSubcategory }</span>
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
