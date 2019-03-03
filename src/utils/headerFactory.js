const commonTools = {
  must: 'Bardzo ważne',
  important: 'Ważne',
  other: 'Inne'
};

const headerData = {
  main: {
    title: 'Start',
    subcategories: []
  },
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
        charts: 'Wykresy',
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
  show: {
    title: 'Show room',
    subcategories: []
  },
  voice: {
    title: 'Głos',
    subcategories: [
      { alexa: 'Alexa' }
    ]
  },
  frontops: {
    title: 'frontops',
    subcategories: [
      { other: 'Inne' },
      { aws: 'AWS' }
    ]
  },
  api: {
    title: 'API',
    subcategories: []
  },
  prod: {
    title: 'Produktywność',
    subcategories: [
      { ide: 'IDE' },
      { git: 'GIT' },
      { monitoring: 'Monitoring' }
    ]
  },
  codeless: {
    title: 'Codeless',
    subcategories: []
  },
};


const headerFactory = category => category !== '' ? headerData[category] : headerData['main']; //eslint-disable-line

export default headerFactory;
