const getPostsCount = (posts) => {
  const count = {};
    for (const post of posts) { // eslint-disable-line
    const subcategory = post.node.tags[1];
    if (count[subcategory]) {
      count[subcategory]++;
    } else {
      count[subcategory] = 1;
    }
  }
  return count;
};

export default getPostsCount;

