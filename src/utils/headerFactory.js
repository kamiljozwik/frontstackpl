const headerData = {
  js: {
    title: 'JavaScript',
    subcategories: ['general', 'security']
  },
  web: {
    title: 'Web',
    subcategories: ['css']
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
