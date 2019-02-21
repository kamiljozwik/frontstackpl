import React, { Component } from 'react';
import PropTypes from 'prop-types';
import browser from 'browser-detect';
import { CSSPlugin, AttrPlugin } from 'gsap/all';
import { StaticQuery, graphql } from 'gatsby';
import browserPopup from './modals/detect-browser';
import Sidebar from './sidebar';
import Topbar from './Topbar';
import Footer from './footer';
import '../styles/index.scss';

// without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [CSSPlugin, AttrPlugin]; // eslint-disable-line
class Layout extends Component {
  constructor(props) {
    super(props);
    this.sidebarMenuWrapper = React.createRef();
  }

  render() {
    const detectedBrowser = browser();
    if (!detectedBrowser.name.match(/^(chrome|firefox|safari|opera|edge|ios)$/) && typeof window !== 'undefined') {
      browserPopup(detectedBrowser.name);
    }
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
  type: PropTypes.string.isRequired,
  currentPage: PropTypes.string,
};

Layout.defaultProps = {
  currentPage: '',
};

export default Layout;
