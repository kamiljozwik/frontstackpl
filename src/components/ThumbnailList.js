import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'gatsby';

const PostThumbnail = ({ node, index, isThumbnail }) => (
  <li className={`${isThumbnail ? 'thumbnail' : ''} item item-${index}`}>
    <div
      className="item--img"
      style={{ backgroundImage: `url(${node.lead.file.url}?w=${isThumbnail ? '300' : '400'}&h=${isThumbnail ? '150' : '200'}&fl=progressive&q=100&fit=fill)` }}
    />
    <div className="item__data">
      <h3 className="item__data--title">
        <Link to={`/${node.tags[0]}/post/${node.slug}`}>{node.title}</Link>
      </h3>
      <div className="item__data--footer">
        <div className="item__data--date">{ moment(node.createdAt).format('DD/MM/YYYY') }</div>
        <Link to={`${node.tags[0]}/post/${node.slug}`} className="seeMore">Czytaj</Link>
      </div>
    </div>
  </li>
);

PostThumbnail.propTypes = {
  node: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isThumbnail: PropTypes.bool
};

PostThumbnail.defaultProps = {
  isThumbnail: true,
};

const ThumbnailList = ({ posts, isThumbnail, isRelated }) => (
  <ul className="posts__list">
    { posts.map((edge, index) => (
      <PostThumbnail
        key={isRelated ? edge.slug : edge.node.slug}
        node={isRelated ? edge : edge.node}
        index={index}
        isThumbnail={isThumbnail}
      />)) }
  </ul>
);

export default ThumbnailList;

ThumbnailList.propTypes = {
  posts: PropTypes.array.isRequired,
  isThumbnail: PropTypes.bool,
  isRelated: PropTypes.bool,
};

ThumbnailList.defaultProps = {
  isThumbnail: true,
  isRelated: false
};

