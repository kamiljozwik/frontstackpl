import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.sidebarMenu = React.createRef();
    this.state = {
      menuOpen: false
    };
  }

  switchMenu = (event) => {
    event.preventDefault();
    event.target.classList.toggle('open');
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  isTabActive = link => this.props.currentPage === link ? 'active' : ''; // eslint-disable-line

  render() {
    return (
      <Menu
        ref={this.sidebarMenu}
        isOpen={this.state.menuOpen}
        noOverlay
        className="sidebar__menu"
        customBurgerIcon={false}
        customCrossIcon={false}
        menuClassName="sidebar__wrapper"
        itemListClassName="sidebar__items"
      >
        <a
          data-link="Open"
          className="sidebar__burger"
          onClick={this.switchMenu}
          onKeyPress={this.switchMenu}
          role="button"
          tabIndex="0"
        >
          {''}
        </a>
        <Link className={`${this.isTabActive('main')}`} data-link="Main" to="/">Main</Link>
        <Link className={`${this.isTabActive('news')}`} data-link="News" to="/news/">News</Link>
        <Link className={`disabled ${this.isTabActive('show')}`} data-link="Show" to="/show/">Show</Link>
        <Link className={`${this.isTabActive('js')}`} data-link="JS" to="/js/">JS</Link>
        <Link className={`${this.isTabActive('web')}`} data-link="Web" to="/web/">WEB</Link>
        <Link className={`disabled ${this.isTabActive('voice')}`} data-link="Voice" to="/voice/">Głos</Link>
        <Link className={`disabled ${this.isTabActive('frontOps')}`} data-link="FrontOps" to="/frontOps/">FrontOps</Link>
        <Link className={`disabled ${this.isTabActive('api')}`} data-link="API" to="/api/">API</Link>
        <Link className={`${this.isTabActive('prod')}`} data-link="Prod" to="/prod/">Prod.</Link>
      </Menu>
    );
  }
}

export default Sidebar;

Sidebar.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
