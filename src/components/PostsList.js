import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import nanoid from 'nanoid';

const SinglePost = ({ node }) => (
  <li>
    <Link to={`/${node.tags[0]}/post/${node.slug}`}>{node.title}</Link>
    <div>{node.description}</div>
    <img alt="single-post" src={node.image} width="200" />
  </li>
);

const PostsList = ({ posts }) => (
  <ul>
    { posts.map(edge => <SinglePost key={nanoid()} node={edge.node} />) }
  </ul>
);

export default PostsList;

SinglePost.propTypes = {
  node: PropTypes.object.isRequired
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};
