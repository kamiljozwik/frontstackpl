import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'gatsby';

const BlogPost = ({ node }) => (
  <li className="header__posts__item">
    <div className="post-image" style={{ backgroundImage: `url(${node.lead.file.url}?w=115&h=65&fl=progressive&q=50&fit=fill)` }} />
    <h2>
      <Link to={`${node.tags[0]}/post/${node.slug}`} className="post-title">{node.title}</Link>
    </h2>
    <div className="post-date">{ moment(node.createdAt).format('DD/MM/YYYY') }</div>
  </li>
);

const HeaderLanding = ({ latestPosts }) => (
  <React.Fragment>
    <section className="landing-page__header">
      <div className="header__posts--label label-small">Najnowszy wpis</div>
      <div className="header__posts" style={{ backgroundImage: `url(${latestPosts[0].node.lead.file.url}?w=1450&h=500&fl=progressive&q=50&fit=fill)` }}>
        <div className="header__posts--latest">
          <div className="date">{ moment(latestPosts[0].node.createdAt).format('DD/MM/YYYY') }</div>
          <div className="title">
            <h1>
              <Link to={`${latestPosts[0].node.tags[0]}/post/${latestPosts[0].node.slug}`} className="title">{latestPosts[0].node.title}</Link>
            </h1>
          </div>
        </div>
        <div className="header__posts__container">
          <ul className="header__posts__list">
            {latestPosts.slice(1).map(edge => <BlogPost key={edge.node.slug} node={edge.node} />)}
          </ul>
        </div>
      </div>
      <div className="header__links">
        <div>Front-end tools!</div>
        <div>Coming soon!</div>
      </div>
    </section>
  </React.Fragment>
);

export default HeaderLanding;

HeaderLanding.propTypes = {
};

HeaderLanding.defaultProps = {
};
