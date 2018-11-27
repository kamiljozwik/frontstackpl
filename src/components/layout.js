import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Sidebar from './sidebar';
import Topbar from './Topbar';
import Footer from './footer';
import '../styles/index.scss';

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
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              >
                <html lang="en" />
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
