import React from 'react';
import ThumbnailList from '../ThumbnailList';

const SecondLevelPosts = ({ posts }) => (
  <section className="second-level-posts">
    <span className="label-small">Pozostałe wpisy</span>
    <ThumbnailList posts={posts} type="second-level-posts" />
  </section>
);

export default SecondLevelPosts;
