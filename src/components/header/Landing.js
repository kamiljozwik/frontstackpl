import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import moment from 'moment';
import { Link } from 'gatsby';
import Toolboxes from './Toolboxes';

const BlogPost = ({ node }) => (
  <li className="header__posts__item">
    <div className="post-image" style={{ backgroundImage: `url(${node.lead.file.url}?w=115&h=65&fl=progressive&q=50&fit=fill)` }} />
    <Link to={`${node.tags[0]}/post/${node.slug}`} className="post-title">{node.title}</Link>
    <div className="post-date">{ moment(node.createdAt).format('DD/MM/YYYY') }</div>
  </li>
);

const HeaderLanding = ({ latestPosts, toolboxItems }) => (
  <React.Fragment>
    <section className="landing-page__header">
      <div className="header__posts--label label-small">Najnowszy wpis</div>
      <div className="header__posts" style={{ backgroundImage: `url(${latestPosts[0].node.lead.file.url}?w=1450&h=500&fl=progressive&q=50&fit=fill)` }}>
        <div className="header__posts--latest">
          <div className="date">{ moment(latestPosts[0].node.createdAt).format('DD/MM/YYYY') }</div>
          <div className="title"><Link to={`${latestPosts[0].node.tags[0]}/post/${latestPosts[0].node.slug}`} className="title">{latestPosts[0].node.title}</Link></div>
        </div>
        <div className="header__posts__container">
          <ul className="header__posts__list">
            {latestPosts.slice(1).map(edge => <BlogPost key={nanoid()} node={edge.node} />)}
          </ul>
        </div>
      </div>
      <Toolboxes toolboxItems={toolboxItems} categories={['js', 'web']} />
    </section>
  </React.Fragment>
);

export default HeaderLanding;

HeaderLanding.propTypes = {
};

HeaderLanding.defaultProps = {
};
