import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { CSSPlugin, AttrPlugin } from 'gsap/all';
import { StaticQuery, graphql } from 'gatsby';
import Sidebar from './sidebar';
import Topbar from './Topbar';
import Footer from './footer';
import '../styles/index.scss';

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [CSSPlugin, AttrPlugin];

class Layout extends Component {
  constructor(props) {
    super(props);
    this.sidebarMenuWrapper = React.createRef();
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={dataQuery => (
            <>
              <Helmet
                title={dataQuery.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Strona dla wszystkich frontendow' },
                  { name: 'keywords', content: 'web, javascript, html, css, react, blog' },
                ]}
              >
                <html lang="pl" />
                <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8" />
              </Helmet>
              <Topbar />
              <div className="sidebar" ref={this.sidebarMenuWrapper}>
                <Sidebar currentPage={this.props.currentPage} />
              </div>
              <div className={this.props.type}>
                { this.props.children }
              </div>
              <Footer />
            </>
        )}
      />
    );
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired
};

export default Layout;
