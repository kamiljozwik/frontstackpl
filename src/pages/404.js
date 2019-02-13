import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404" description="Strony nie znaleziono" image=""
      url="https://frontstack.pl/404" keywords={[]}
    />
    <div className="not-found">
      <div className="four-oh-four">404</div>
      <div className="desc">Przykro mi - żądana strona nie została znaleziona...</div>
      <Link className="link" to="/">Wróć na stronę startową</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
