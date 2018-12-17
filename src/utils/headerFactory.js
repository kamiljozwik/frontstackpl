const headerData = {
  js: {
    title: 'JavaScript',
    subcategories: [
      { general: 'Ogólne' },
    ]
  },
  web: {
    title: 'Web',
    subcategories: [
      { css: 'CSS' },
      { mobile: 'Mobile' },
      { browser: 'Przeglądarka' },
      { react: 'React' }
    ]
  },
  news: {
    title: 'News',
    subcategories: []
  },
  show: {
    title: 'Show room',
    subcategories: []
  },
  voice: {
    title: 'Głos',
    subcategories: []
  },
  frontops: {
    title: 'frontOps',
    subcategories: []
  },
  api: {
    title: 'API',
    subcategories: []
  },
  prod: {
    title: 'Produktywność',
    subcategories: []
  },
  codeless: {
    title: 'Codeless',
    subcategories: []
  },
};


const headerFactory = category => headerData[category];

export default headerFactory;
