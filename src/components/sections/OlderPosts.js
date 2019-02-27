import React from 'react';
import ThumbnailList from '../ThumbnailList';

const OlderPosts = ({ posts }) => (
  <section className="older-posts">
    <ThumbnailList posts={posts} />
  </section>
);

export default OlderPosts;
