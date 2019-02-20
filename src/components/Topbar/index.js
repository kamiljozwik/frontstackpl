import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import FSLogo from './FSLogo';
import facebook from '../../styles/img/logos/social/facebook--black.svg';
import twitter from '../../styles/img/logos/social/twitter--black.svg';
import github from '../../styles/img/logos/social/github.svg';

const Topbar = () => (
  <div className="topbar--wrapper">
    <div className="left" />
    <div className="center logo">
      <Link to="/"><FSLogo /></Link>
    </div>
    <div className="right">
      <div className="links">
        <div className="about"><Link to="/about">O stronie</Link></div>
        <div className="contact"><Link to="/contact">Kontakt</Link></div>
      </div>
      <div className="social">
        <div className="social--fb"><OutboundLink href="https://www.facebook.com/frontstackpl" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></OutboundLink></div>
        <div className="social--twitter"><OutboundLink href="https://twitter.com/frontstackpl" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></OutboundLink></div>
        <div className="social--github"><OutboundLink href="https://github.com/frontstackpl/frontstackpl" target="_blank" rel="noopener noreferrer"><img src={github} alt="hithub" /></OutboundLink></div>
      </div>
    </div>
  </div>
);

export default Topbar;
