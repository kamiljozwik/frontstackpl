import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import nanoid from 'nanoid';
import moment from 'moment';
import Layout from '../../components/layout';


const NewsColumn = ({ news }) => (
  <div className="news">
    <div className="news__label label-regular">Front News</div>
    <ul className="news__list">
      {news.map(_news => (
        <li key={nanoid()} className="news__list--item">
          <div className="news__data">
            <div className="date day">{ moment(_news.node.createdAt).format('DD') }</div>
            <div className="date month">{ moment(_news.node.createdAt).format('MM') }</div>
          </div>
          <div className="news__desc">
            <div className="title"><a href={_news.node.link}>{ _news.node.title }</a></div>
            <div className="desc news__content post__content" dangerouslySetInnerHTML={{ __html: _news.node.content.childMarkdownRemark.html }} />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const NewsPage = ({ data }) => (
  <React.Fragment>
    <Layout type="withoutHeader" currentPage="news">
      <div className="news-wrapper">
        {<NewsColumn news={data.News.edges} />}
      </div>
    </Layout>
  </React.Fragment>
);

export default NewsPage;

export const pageQuery = graphql`
query newsPostsQuery {
  News: allContentfulNewsEntry (
    sort: {fields: [createdAt], order: DESC}
    ) {
    edges {
      node {
        id
        title
        slug
        createdAt
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`;

NewsPage.propTypes = {
  data: PropTypes.object
};

NewsPage.defaultProps = {
  data: {}
};
