import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import moment from 'moment';
import { Link } from 'gatsby';

const NewsItem = ({ edge }) => (
  <li className="header__news__list--item">
    <div className="news__data">
      <div className="date day">{ moment(edge.node.createdAt).format('DD') }</div>
      <div className="date month">{ moment(edge.node.createdAt).format('MM') }</div>
    </div>
    <div className="news-title"><Link to="/news">{ edge.node.title }</Link></div>
  </li>
);

const News = ({ news }) => (
  <div className="header__news">
    <div className="header__news--label label-small">FRONT NEWS</div>
    <div className="header__news__container">
      <ul className="header__news__list">
        { news.map(edge => <NewsItem key={nanoid()} edge={edge} />) }
      </ul>
      <div className="header__news--seeMore seeMore"><Link to="/news">wszystkie</Link></div>
    </div>
  </div>
);

export default News;
