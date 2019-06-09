import React, { useContext, useRef, useState, useEffect } from 'react';
// import debounce from 'lodash/debounce';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';
import { HeaderContext } from '../../HeaderContext';

function SidebarItem({ active, link, to, name }) {
  return (
    <Link className={`bm-item ${active ? 'active' : ''}`} data-link={link} to={to}>{name}</Link>
  );
}

function Sidebar() {
  const context = useContext(HeaderContext);
  const sidebarMenu = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(document.documentElement.clientWidth);
    // window.addEventListener('resize', debounce(setWindowWidth(window.innerWidth), 300));
    window.addEventListener('resize', setWindowWidth(document.documentElement.clientWidth));
  }, []);

  function switchMenu(event) {
    event.preventDefault();
    event.target.classList.toggle('open');
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  }

  return (
    <Menu
      ref={sidebarMenu}
      isOpen={windowWidth > 600 ? true : menuOpen}
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
        onClick={switchMenu}
        onKeyPress={switchMenu}
        role="button"
        tabIndex="0"
      >
        {''}
      </a>
      <SidebarItem active={context.currentCategory === ''} link="Main" to="/" name="" />
      <SidebarItem active={context.currentCategory === 'show'} link="Show" to="/show/" name="Show" />
      <SidebarItem active={context.currentCategory === 'js'} link="JS" to="/js/" name="JavaScript" />
      <SidebarItem active={context.currentCategory === 'web'} link="Web" to="/web/" name="WEB" />
      <SidebarItem active={context.currentCategory === 'voice'} link="Voice" to="/voice/" name="Głos" />
      <SidebarItem active={context.currentCategory === 'frontops'} link="FrontOps" to="/frontops/" name="FrontOps" />
      <SidebarItem active={context.currentCategory === 'api'} link="API" to="/api/" name="API" />
      <SidebarItem active={context.currentCategory === 'prod'} link="Prod" to="/prod/" name="Prod" />

    </Menu>
  );
}

export default Sidebar;
