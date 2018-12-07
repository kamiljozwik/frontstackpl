import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import { Link } from 'gatsby';

const Subcategory = ({ category, subcategory, currentSubcategory }) => (
  <li className={`header__subcategories__list--item ${currentSubcategory === subcategory ? 'active' : ''}`}>
    <div className="subcategories-title"><Link to={`/${category}/${subcategory}`}>{ subcategory }</Link></div>
  </li>
);

const Subcategories = ({ subcategories, category, siteTitle, currentSubcategory }) => (
  <div className="header__subcategories">
    <div className="header__subcategories--label label-small"><Link to={`/${category}`}>{siteTitle}</Link></div>
    <div className="header__subcategories__container">
      <ul className="header__subcategories__list">
        {subcategories.map(item => (
          <Subcategory
            key={nanoid()}
            category={category}
            subcategory={item}
            currentSubcategory={currentSubcategory}
          />))}
      </ul>
    </div>
  </div>
);

export default Subcategories;
