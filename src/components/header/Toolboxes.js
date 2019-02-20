import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import { Link } from 'gatsby';
import headerFactory from '../../utils/headerFactory';

const ToolboxItem = ({ category }) => (
  <li className={`header__toolboxes__list--item ${category}`}>
    <div className="toolboxes-title"><Link className="toolboxes-title--link" to={`/${category}/toolbox`}>{headerFactory(category).title}</Link></div>
  </li>
);

const Toolboxes = ({ categories }) => (
  <div className="header__toolboxes">
    <div className="header__toolboxes--label label-small">Toolboxy</div>
    <div className="header__toolboxes__container">
      <ul className="header__toolboxes__list">
        { categories.map(category => <ToolboxItem key={nanoid()} category={category} />) }
      </ul>
    </div>
  </div>
);

export default Toolboxes;
