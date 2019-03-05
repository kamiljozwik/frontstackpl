import React, { useContext, useRef, useState, useEffect } from 'react';
// import debounce from 'lodash/debounce';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';
import { HeaderContext } from '../../HeaderContext';

function Sidebar() {
  const context = useContext(HeaderContext);
  const sidebarMenu = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    // window.addEventListener('resize', debounce(setWindowWidth(window.innerWidth), 300));
    window.addEventListener('resize', setWindowWidth(window.innerWidth));
  }, []);

  function switchMenu(event) {
    event.preventDefault();
    event.target.classList.toggle('open');
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  }

  const isTabActive = (link) => context.currentCategory === link ? 'active' : ''; // eslint-disable-line

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
      <Link className={`${isTabActive('')}`} data-link="Main" to="/" />
      <Link className={`${isTabActive('show')}`} data-link="Show" to="/show/">Show</Link>
      <Link className={`${isTabActive('js')}`} data-link="JS" to="/js/">JavaScript</Link>
      <Link className={`${isTabActive('web')}`} data-link="Web" to="/web/">WEB</Link>
      <Link className={`${isTabActive('voice')}`} data-link="Voice" to="/voice/">Głos</Link>
      <Link className={`${isTabActive('frontops')}`} data-link="FrontOps" to="/frontops/">FrontOps</Link>
      <Link className={`${isTabActive('api')}`} data-link="API" to="/api/">API</Link>
      <Link className={`${isTabActive('prod')}`} data-link="Prod" to="/prod/">Prod.</Link>
    </Menu>
  );
}

export default Sidebar;
