import React from 'react';

const HeaderContext = React.createContext('default');
const { Provider, Consumer } = HeaderContext;

function getPostsCount(posts) {
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
}

class HeaderProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: document.location.pathname.split("/")[1],
      currentSubcategory: document.location.pathname.split("/")[2],
    };
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export { HeaderProvider, Consumer as HeaderConsumer, HeaderContext };
