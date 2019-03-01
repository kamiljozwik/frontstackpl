import React from 'react';

const HeaderContext = React.createContext('default');
const { Provider, Consumer } = HeaderContext;

class HeaderProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: this.getCategory(),
      currentSubcategory: this.getSubcategory()
    };
  }

  getCategory = () => typeof document !== 'undefined' ? document.location.pathname.split('/')[1] : 'js';

  getSubcategory = () => typeof document !== 'undefined' ? document.location.pathname.split('/')[2] : '';

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export { HeaderProvider, Consumer as HeaderConsumer, HeaderContext };
