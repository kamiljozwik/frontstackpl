import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import { Link } from 'gatsby';

const Subcategory = ({ category, subcategory, currentSubcategory }) => {
  const urlName = Object.keys(subcategory)[0];
  const printName = subcategory[Object.keys(subcategory)[0]];
  return (
    <li className={`header__subcategories__list--item ${currentSubcategory === urlName ? 'active' : ''}`}>
      <div className="subcategories-title"><Link to={`/${category}/${urlName}`}>{ printName }</Link></div>
    </li>
  );
};

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
