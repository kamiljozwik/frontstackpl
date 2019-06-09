const headerData = {
  main: {
    title: 'Start',
    subcategories: []
  },
  js: {
    title: 'JavaScript',
    subcategories: [
      { general: 'Ogólne' },
      { tests: 'Testy' },
    ],
  },
  web: {
    title: 'Web',
    subcategories: [
      { css: 'CSS' },
      { mobile: 'Mobile' },
      { browser: 'Przeglądarka' },
      { react: 'React' }
    ],
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
