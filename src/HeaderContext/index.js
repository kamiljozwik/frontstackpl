import React, { useState, useEffect } from 'react';

const HeaderContext = React.createContext('default');
const { Provider, Consumer } = HeaderContext;

// function HeaderProvider({ children }) {
//   const [currentCategory, setCurrentCategory] = useState('');
//   const [currentSubcategory, setcurrentSubcategory] = useState('');

//   useEffect(() => {
//     setCurrentCategory(typeof document !== 'undefined' ? document.location.pathname.split('/')[1] : '');
//     setcurrentSubcategory(typeof document !== 'undefined' ? document.location.pathname.split('/')[2] : '');
//   }, []);

//   return (
//     <Provider value={{ currentCategory, currentSubcategory }}>
//       {children}
//     </Provider>
//   );
// }

class HeaderProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: '',  // eslint-disable-line
      currentSubcategory: '',  // eslint-disable-line
    };
  }

  componentDidMount() {
    this.getCategory();
    this.getSubcategory();
  }

  getCategory = () => {
    const category = typeof document !== 'undefined' ? document.location.pathname.split('/')[1] : '';
    this.setState({currentCategory: category});  // eslint-disable-line
  }

  getSubcategory = () => {
    const subCategory = typeof document !== 'undefined' ? document.location.pathname.split('/')[2] : '';
    this.setState({currentSubcategory: subCategory}); // eslint-disable-line
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
