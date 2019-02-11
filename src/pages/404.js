import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div className="not-found">
      <div className="four-oh-four">404</div>
      <div className="desc">Przykro mi - żądana strona nie została znaleziona...</div>
      <Link className="link" to="/">Wróć na stronę startową</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
