import React from 'react';
import ThumbnailList from '../ThumbnailList';

const RecentPosts = ({ posts }) => (
  <section className="recent-posts">
    <ThumbnailList posts={posts} isThumbnail={false} />
  </section>
);

export default RecentPosts;
