import React, { useState, useEffect } from 'react';

const HeaderContext = React.createContext('default');
const { Provider, Consumer } = HeaderContext;

function HeaderProvider({ children }) {
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentSubcategory, setcurrentSubcategory] = useState('');

  useEffect(() => {
    setCurrentCategory(typeof document !== 'undefined' ? document.location.pathname.split('/')[1] : '');
    setcurrentSubcategory(typeof document !== 'undefined' ? document.location.pathname.split('/')[2] : '');
  }, []);

  return (
    <Provider value={{ currentCategory, currentSubcategory }}>
      {children}
    </Provider>
  );
}

export { HeaderProvider, Consumer as HeaderConsumer, HeaderContext };
