import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';
import { HeaderContext } from '../../HeaderContext';

class Sidebar extends Component {
  static contextType = HeaderContext;

  constructor(props) {
    super(props);
    this.sidebarMenu = React.createRef();
    this.state = {
      menuOpen: false,
      windowWidth: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', debounce(this.updateWindowDimensions, 300));
  }

  updateWindowDimensions = () => {
    this.setState(prevState => ({
      ...prevState,
      windowWidth: window.innerWidth
    }));
  }

  switchMenu = (event) => {
    event.preventDefault();
    event.target.classList.toggle('open');
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  isTabActive = link => this.context.currentCategory === link ? 'active' : ''; // eslint-disable-line

  render() {
    return (
      <Menu
        ref={this.sidebarMenu}
        isOpen={this.state.windowWidth > 600 ? true : this.state.menuOpen}
        width={70}
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
        <Link className={`${this.isTabActive('')}`} data-link="Main" to="/" />
        <Link className={`${this.isTabActive('show')}`} data-link="Show" to="/show/">Show</Link>
        <Link className={`${this.isTabActive('js')}`} data-link="JS" to="/js/">JavaScript</Link>
        <Link className={`${this.isTabActive('web')}`} data-link="Web" to="/web/">WEB</Link>
        <Link className={`${this.isTabActive('voice')}`} data-link="Voice" to="/voice/">Głos</Link>
        <Link className={`${this.isTabActive('frontops')}`} data-link="FrontOps" to="/frontops/">FrontOps</Link>
        <Link className={`${this.isTabActive('api')}`} data-link="API" to="/api/">API</Link>
        <Link className={`${this.isTabActive('prod')}`} data-link="Prod" to="/prod/">Prod.</Link>
      </Menu>
    );
  }
}

export default Sidebar;
