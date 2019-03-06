import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import headerFactory from '../../utils/headerFactory';

function calcCount(itemsArray, category) {
  const filteredArray = itemsArray.filter(item => item.node.category === category);
  return filteredArray.length;
}

const ToolboxItem = ({ category, toolboxItems }) => (
  <li className={`header__toolboxes__list--item ${category}`}>
    <div className="toolboxes-title">
      <Link className="toolboxes-title--link" to={`/${category}/toolbox`}>{headerFactory(category).title}</Link>
    </div>
    <div className="toolboxes-count">
      <div>{`Liczba narzędzi: ${calcCount(toolboxItems, category)}`}</div>
    </div>
  </li>
);

const Toolboxes = ({ categories, toolboxItems }) => (
  <div className="header__toolboxes">
    <div className="header__toolboxes--label label-small">Toolboxes</div>
    <div className="header__toolboxes__container">
      <ul className="header__toolboxes__list">
        { categories.map(category => <ToolboxItem key={category} category={category} toolboxItems={toolboxItems} />) }
      </ul>
    </div>
  </div>
);

export default Toolboxes;
