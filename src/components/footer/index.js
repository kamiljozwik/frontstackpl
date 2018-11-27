import React from 'react';
import FSLogo from '../Topbar/FSLogo';
import facebook from '../../styles/img/logos/social/facebook--black.svg';
import twitter from '../../styles/img/logos/social/twitter--black.svg';
import slack from '../../styles/img/logos/social/slack--black.svg';
import github from '../../styles/img/logos/social/github.svg';

const slackLink = 'https://join.slack.com/t/frontstackpl/shared_invite/enQtNDg0MDI5NzExMzUxLTVmNjdmMjFhMzllYTUzM2JjMTZjMWZhNTE4NDU2OTgyNWE5NmFhNGYyMmI1YThiMGVhYjRjM2FhZWYzODYxMzY';

const Footer = () => (
  <section className="footer">
    <div className="logo"><FSLogo /></div>
    <div className="copyright">Copyright 2018. All rights reserved.</div>
    <div className="social">
      <div className="social--fb"><a href="https://www.facebook.com/frontstackpl" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a></div>
      <div className="social--twitter"><a href="https://twitter.com/frontstackpl" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a></div>
      <div className="social--slack"><a href={slackLink} target="_blank" rel="noopener noreferrer"><img src={slack} alt="slack" /></a></div>
      <div className="social--github"><a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a></div>
    </div>
  </section>
);

export default Footer;
