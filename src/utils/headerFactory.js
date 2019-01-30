const commonTools = {
  must: 'Bardzo ważne',
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
        tests: 'Testowanie',
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
        bundler: 'Bundlers',
        auth: 'Autoryzacja',
        charts: 'Wizualizacja danych',
        animation: 'Animacja',
        ui: 'UI',
        notifications: 'Notyfikacje',
        scroll: 'Scroll',
        chats: 'Chats',
        performance: 'Wydajność',
        ecommerce: 'eCommerce',
        search: 'Wyszukiwanie',
        tests: 'Testowanie',
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
      { ide: 'IDE' },
      { git: 'GIT' }
    ]
  },
  codeless: {
    title: 'Codeless',
    subcategories: []
  },
};


const headerFactory = category => headerData[category];

export default headerFactory;
