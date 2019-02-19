import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import moment from 'moment';
import FSLogo from '../Topbar/FSLogo';
import facebook from '../../styles/img/logos/social/facebook--black.svg';
import twitter from '../../styles/img/logos/social/twitter--black.svg';
import github from '../../styles/img/logos/social/github.svg';

const Footer = () => (
  <section className="footer">
    <div className="logo"><FSLogo /></div>
    <div className="copyright">{`Copyright ${moment().format('YYYY')}. All rights reserved.`}</div>
    <div className="social">
      <div className="social--fb"><OutboundLink href="https://www.facebook.com/frontstackpl" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></OutboundLink></div>
      <div className="social--twitter"><OutboundLink href="https://twitter.com/frontstackpl" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></OutboundLink></div>
      <div className="social--github"><OutboundLink href="https://github.com" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></OutboundLink></div>
    </div>
  </section>
);

export default Footer;
