import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Disqus from 'disqus-react';
import Avatar from 'react-avatar';
import { graphql } from 'gatsby';
import nanoid from 'nanoid';
import '../../cdn_local/platform';
import Layout from '../layout';
import Header from '../header';
import headerFactory from '../../utils/headerFactory';
import Twitter from '../../styles/img/logos/social/twitter.svg';

class blogPost extends Component {
  constructor(props) {
    super(props);
    this.post = props.data.contentfulBlogEntry;
    this.category = props.data.contentfulBlogEntry.tags[0];
    this.subcategory = props.data.contentfulBlogEntry.tags[1];
    this.headerData = headerFactory(this.category);
  }

  renderInspirations = inspirations => (
    inspirations.map(item => (
      <li key={nanoid()} className="post__links--item">{item}</li>
    ))
  )

  render() {
    const { title, content, author, inspirations, tags } = this.post;
    const shortname = this.props.pageContext.disqusShortName;
    const disqusConfig = {
      url: `https://frontstack.pl${this.props.location.pathname}`,
      identifier: `${this.props.location.pathname}`,
      title,
    };

    return (
      <Layout type="blog-post-page" currentPage={this.category}>
        <Header
          siteTitle={tags[0]}
          category={this.category}
          post={{ node: this.post }}
          subcategories={this.headerData.subcategories}
          isBlogPost
        />
        <div className="post">
          <section className="post__content" dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
          <section className="post__author">
            <Avatar className="post__author--avatar" twitterHandle="jozwikk" size="60" />
            <div className="post__author--data">
              <div className="post__author--name">{author}</div>
              <div className="post__author--links">
                <a
                  className="twitter-link" href="https://twitter.com/jozwikk" target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="twitter" />
                </a>
              </div>
            </div>
          </section>
          {inspirations && inspirations.length > 0 && (
            <section className="post__links">
              <span className="post__links--label">Źródła:</span>
              <ul className="post__links--list">
                { this.renderInspirations(inspirations) }
              </ul>
            </section>
          )}
          <section className="post__comments">
            <Disqus.DiscussionEmbed shortname={shortname} config={disqusConfig} />
          </section>
        </div>
      </Layout>
    );
  }
}

blogPost.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default blogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogEntry(slug: {eq: $slug}) {
      ...BlogPostFields
    }
  }
`;
