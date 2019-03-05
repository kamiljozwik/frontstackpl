import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import browser from 'browser-detect';
import { CSSPlugin, AttrPlugin } from 'gsap/all';
import { StaticQuery, graphql } from 'gatsby';
import browserPopup from './modals/detect-browser';
import { HeaderProvider } from '../HeaderContext';
import Sidebar from './sidebar';
import Topbar from './Topbar';
import Footer from './footer';
import '../styles/index.scss';

// without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [CSSPlugin, AttrPlugin]; // eslint-disable-line

function Layout({ type, children }) {
  const sidebarMenuWrapperRef = useRef(null);

  useEffect(() => {
    const detectedBrowser = browser();
    if (!detectedBrowser.name.match(/^(chrome|firefox|safari|opera|edge|ios)$/) && typeof window !== 'undefined') {
      browserPopup(detectedBrowser.name);
    }
  }, []);

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
        <HeaderProvider>
          <Topbar />
          <div className="sidebar" ref={sidebarMenuWrapperRef}>
            <Sidebar />
          </div>
          <div className={type}>
            { children }
          </div>
          <Footer />
        </HeaderProvider>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default Layout;
