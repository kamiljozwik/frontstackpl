import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import nanoid from 'nanoid';
import { uniq } from 'lodash';
import Layout from '../layout';
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

const ToolsList = ({ type, printType, tools }) => (
  <div className="toolbox__list">
    <span className="toolbox__list--type label-regular">{printType}</span>
    <ul className="toolbox__list--content">
      {
        tools.map(tool => tool.node.type === type && <ToolItem key={nanoid()} tool={tool} />)
      }
    </ul>
  </div>
);

class Subcategory extends Component {
  constructor(props) {
    super(props);
    this.tools = props.data.Tools.edges;
    this.pageCategory = props.data.Tools.edges[0].node.category;
    this.headerData = headerFactory(this.pageCategory);
    this.types = uniq(this.tools.map(tool => tool.node.type));
  }

  render() {
    return (
      <>
        <Layout type="category-page category-page__subcategories" currentPage={this.pageCategory}>
          <Header
            siteTitle={this.headerData.title}
            category={this.pageCategory}
            currentSubcategory="toolbox"
            subcategories={this.headerData.subcategories}
            isToolBox
          />
          <section className="toolbox">
            <div className="toolbox__types">
              {
                this.types.map(type => (
                  <ToolsList
                    key={nanoid()}
                    type={type}
                    printType={this.headerData.tools[type]}
                    tools={this.tools}
                  />))
              }
            </div>
          </section>
        </Layout>
        </>
    );
  }
}

export default Subcategory;

Subcategory.propTypes = {
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
