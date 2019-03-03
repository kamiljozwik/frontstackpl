import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import { Link } from 'gatsby';
import { HeaderConsumer } from '../../HeaderContext';
import headerFactory from '../../utils/headerFactory';

const Subcategory = ({ category, subcategory, currentSubcategory }) => {
  const urlName = Object.keys(subcategory)[0];
  const printName = subcategory[Object.keys(subcategory)[0]];
  return (
    <React.Fragment>
      <li className={`header__subcategories__list--item ${(urlName === 'toolbox' || urlName === 'cheatsheets') ? 'toolbox-link' : ''} ${currentSubcategory === urlName ? 'active' : ''}`}>
        <div className="subcategories-title">
          <Link to={`/${category}/${urlName}`}>{ printName }</Link>
        </div>
        { /* TO DO: Wyświetlanie liczby wiadomości */ }
        <div className="subcategories-number" />
      </li>
    </React.Fragment>
  );
};

const Subcategories = () => (
  <HeaderConsumer>
    {({ currentCategory, currentSubcategory }) => (
      <div className="header__subcategories">
        <div className="header__subcategories--label label-small">
          <h2>
            <Link to={`/${currentCategory}`}>{headerFactory(currentCategory).title}</Link>
          </h2>
        </div>
        <div className="header__subcategories__container">
          <ul className="header__subcategories__list">
            {headerFactory(currentCategory).subcategories.map(item => (
              <Subcategory
                key={nanoid()}
                category={currentCategory}
                subcategory={item}
                currentSubcategory={currentSubcategory}
              />))}
          </ul>
        </div>
      </div>
    )}
  </HeaderConsumer>
);

export default Subcategories;
