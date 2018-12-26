import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'gatsby';
import Subcategories from './Subcategories';

const Header = ({ siteTitle, category, currentSubcategory, subcategories, post, isBlogPost, isToolBox }) => (
  <React.Fragment>
    <section className={`category-header ${category}`}>
      {isBlogPost || isToolBox ? '' : <div className="header--label label-small">Najnowszy wpis</div>}
      {isToolBox ? (
        <div
          className="header__posts header__posts--toolbox"
        />
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
          {category !== 'codeless' && (
            <div className="header__posts__background">
              <div className="header__posts__inner" />
            </div>
          )}
        </div>
      )}
      {category !== 'codeless' && (
        <Subcategories
          subcategories={subcategories}
          category={category}
          siteTitle={siteTitle}
          currentSubcategory={currentSubcategory}
        />
      )}
    </section>
  </React.Fragment>
);

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  currentSubcategory: PropTypes.string,
  subcategories: PropTypes.array,
  isBlogPost: PropTypes.bool,
  isToolBox: PropTypes.bool
};

Header.defaultProps = {
  currentSubcategory: '',
  subcategories: [],
  isBlogPost: false,
  isToolBox: false,
};
