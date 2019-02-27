import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'gatsby';
import Subcategories from './Subcategories';
import { HeaderConsumer } from '../../HeaderContext';

const Header = ({ post, isBlogPost, isToolBox }) => (
  <HeaderConsumer>
    {({ currentCategory }) => (
      <section className={`category-header ${currentCategory}`}>
        {isBlogPost || isToolBox ? '' : <div className="header--label label-small">Najnowszy wpis</div>}
        {isToolBox ? (
          <div className="header__posts header__posts--toolbox">
            <span className="title">TOOLBOX</span>
            <div className="header__posts__background" />
          </div>
        ) : (
          <div
            className="header__posts"
            style={{ backgroundImage: `url(${post.node.lead.file.url}?w=1450&h=500&fl=progressive&q=50&fit=fill)` }}
          >
            <div className={`header__posts--latest ${isBlogPost ? 'blogPost' : ''}`}>
              <div className="date">{ moment(post.node.createdAt).format('DD/MM/YYYY') }</div>
              <div className="title"><Link to={`${post.node.tags[0]}/post/${post.node.slug}`} className="title">{post.node.title}</Link></div>
              {isBlogPost ? '' : <Link to={`${post.node.tags[0]}/post/${post.node.slug}`} className="seeMore">Czytaj</Link>}
            </div>
            {currentCategory !== 'codeless' && (
              <div className="header__posts__background">
                <div className="header__posts__inner">
                  <span>{isBlogPost ? post.node.lead.description : ''}</span>
                </div>
              </div>
            )}
          </div>
        )}
        {currentCategory !== 'codeless' && <Subcategories />}
      </section>
    )}
  </HeaderConsumer>
);

export default Header;

Header.propTypes = {
  post: PropTypes.object.isRequired,
  isBlogPost: PropTypes.bool,
  isToolBox: PropTypes.bool
};

Header.defaultProps = {
  isBlogPost: false,
  isToolBox: false,
};
