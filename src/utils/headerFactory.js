const commonTools = {
  must: 'Obowiązkowe',
  important: 'Ważne',
  other: 'Inne'
};

const headerData = {
  js: {
    title: 'JavaScript',
    subcategories: [
      { toolbox: 'Toolbox' },
      { general: 'Ogólne' },
      { tests: 'Testy' },
    ],
    tools:
      {
        ...commonTools,
      },
  },
  web: {
    title: 'Web',
    subcategories: [
      { toolbox: 'Toolbox' },
      { css: 'CSS' },
      { mobile: 'Mobile' },
      { browser: 'Przeglądarka' },
      { react: 'React' }
    ],
    tools:
      {
        ...commonTools,
      },
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
    subcategories: [
      { ide: 'IDE' }
    ]
  },
  codeless: {
    title: 'Codeless',
    subcategories: []
  },
};


const headerFactory = category => headerData[category];

export default headerFactory;
