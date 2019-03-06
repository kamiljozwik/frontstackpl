import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import nanoid from 'nanoid';
import { uniq } from 'lodash';
import TweenMax from 'gsap/TweenMax';
import Layout from '../layout';
import SEO from '../SEO';
import Header from '../header';
import headerFactory from '../../utils/headerFactory';
import github from '../../styles/img/logos/social/github.svg';
import website from '../../styles/img/icons/website.svg';
import npm from '../../styles/img/icons/npm.svg';

const ToolItem = tool => (
  <li className="toolbox__list--item item">
    <div className="item--data">
      <div className="item--name">{tool.tool.node.name}</div>
      <div className="item--links">
        {tool.tool.node.github && <a href={tool.tool.node.github} target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>}
        {tool.tool.node.website && <a href={tool.tool.node.website} target="_blank" rel="noopener noreferrer"><img src={website} alt="website" /></a>}
        {tool.tool.node.npm && <a href={tool.tool.node.npm} target="_blank" rel="noopener noreferrer"><img src={npm} alt="npm" /></a>}
      </div>
    </div>
    <p className="item--desc" dangerouslySetInnerHTML={{ __html: tool.tool.node.description.childMarkdownRemark.html }} />
  </li>
);

function toggleList(e) {
  e.preventDefault();
  const list = e.target;
  if (list.classList.contains('show')) {
    TweenMax.to(list.parentNode, 0.2, { height: '60px', overflow: 'hidden' });
    list.textContent = 'Rozwiń';
  } else {
    TweenMax.set(list.parentNode, { height: 'auto', overflow: 'visible' });
    TweenMax.from(list.parentNode, 0.2, { height: '60px' });
    list.textContent = 'Zwiń';
  }
  list.classList.toggle('show');
}

const ToolsList = ({ type, printType, tools }) => (
  <div className="toolbox__list">
    <span className="toolbox__list--type label-regular">{printType}</span>
    <span
      className="toolbox__list--toggle" role="button" tabIndex={0}
      onClick={toggleList} onKeyPress={toggleList}
    >
      {'Rozwiń'}
    </span>
    <ul className="toolbox__list--content">
      {
        tools.map(tool => tool.node.type === type && <ToolItem key={nanoid()} tool={tool} />)
      }
    </ul>
  </div>
);

function Toolbox({ data }) {
  const tools = data.Tools.edges;
  const pageCategory = data.Tools.edges[0].node.category;
  const headerData = headerFactory(pageCategory);
  const types = uniq(tools.map(tool => tool.node.type));

  useEffect(() => {
    TweenMax.to('.toolbox__list', 0, { height: '60px', overflow: 'hidden' });
  }, []);

  const generateTable = () => {
    const left = [];
    const right = [];
    types.map((type, index) => {
      index % 2 === 0 ? left.push(type) : right.push(type);
      return null;
    });
    return (
      <>
        <div className="toolbox__types--left">
          {left.map(type => (
            <ToolsList
              key={nanoid()}
              type={type}
              printType={headerData.tools[type]}
              tools={tools}
            />
          ))}
        </div>
        <div className="toolbox__types--right">
          {right.map(type => (
            <ToolsList
              key={nanoid()}
              type={type}
              printType={headerData.tools[type]}
              tools={tools}
            />
          ))}
        </div>
      </>
    );
  };
  return (
  <>
    <Layout type="category-page category-page__subcategories">
      <SEO
        title={`${headerData.title} Toolbox - Frontstack.pl`}
        url={`https://frontstack.pl/${pageCategory}/toolbox`}
      />
      <Header isToolBox />
      <section className="toolbox">
        <div className="toolbox__types">
          { generateTable() }
        </div>
      </section>
    </Layout>
    </>
  );
}

export default Toolbox;

Toolbox.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
query toolboxQuery ($category: [String]) {
  Tools: allContentfulToolEntry (
    limit: 100
    filter: {
      node_locale: {eq: "pl-PL"}
      category: {in: $category}
    },
    sort: {fields: [createdAt], order: DESC}
  )
  {
    edges {
      node {
        name
        category
        type
        description {
          childMarkdownRemark {
              html
          }
        }
        github
        website
        npm
      }
    }
  }
  allPosts: allContentfulBlogEntry (
    limit: 1
    filter: {
      node_locale: {eq: "pl-PL"}
      tags: {in: $category}
    },
    sort: {fields: [createdAt], order: DESC}
  )
  {
    edges {
      node {
        ...BlogPostFields
      }
    }
  }
}
`;
