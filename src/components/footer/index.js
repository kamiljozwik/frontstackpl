import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import moment from 'moment';
import FSLogo from '../Topbar/FSLogo';
import facebook from '../../styles/img/logos/social/facebook--black.svg';
import twitter from '../../styles/img/logos/social/twitter--black.svg';
import slack from '../../styles/img/logos/social/slack--black.svg';
import github from '../../styles/img/logos/social/github.svg';

const slackLink = 'https://join.slack.com/t/frontstackpl/shared_invite/enQtNDg0MDI5NzExMzUxLTVmNjdmMjFhMzllYTUzM2JjMTZjMWZhNTE4NDU2OTgyNWE5NmFhNGYyMmI1YThiMGVhYjRjM2FhZWYzODYxMzY';

const Footer = () => (
  <section className="footer">
    <div className="logo"><FSLogo /></div>
    <div className="copyright">{`Copyright ${moment().format('YYYY')}. All rights reserved.`}</div>
    <div className="social">
      <div className="social--fb"><OutboundLink href="https://www.facebook.com/frontstackpl" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></OutboundLink></div>
      <div className="social--twitter"><OutboundLink href="https://twitter.com/frontstackpl" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></OutboundLink></div>
      <div className="social--slack"><OutboundLink href={slackLink} target="_blank" rel="noopener noreferrer"><img src={slack} alt="slack" /></OutboundLink></div>
      <div className="social--github"><OutboundLink href="https://github.com/frontstackpl" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></OutboundLink></div>
    </div>
  </section>
);

export default Footer;
