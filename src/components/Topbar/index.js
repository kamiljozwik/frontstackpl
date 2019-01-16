import React from 'react';
import { Link } from 'gatsby';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import FSLogo from './FSLogo';
import facebook from '../../styles/img/logos/social/facebook--black.svg';
import twitter from '../../styles/img/logos/social/twitter--black.svg';
import slack from '../../styles/img/logos/social/slack--black.svg';
import github from '../../styles/img/logos/social/github.svg';

const SlackModal = withReactContent(Swal);
const ModalContent = () => (
  <div className="modal__slack--content">
    <ul>
      <li>chcesz podyskutować na tematy związane z front-endem,</li>
      <li>natrafiłeś na problem i nie możesz znaleźć rozwiązania,</li>
      <li>chcesz zasięgnąć rad od doświadczonych developerów,</li>
      <li>masz pomysł na ciekawy artykuł,</li>
      <li>masz uwagi co do funkcjonowania naszej strony,</li>
      <li>masz pomysły jak rozwinąć naszą stronę,</li>
      <li>chcesz rozwijać stronę razem z nami, </li>
    </ul>
    <p>koniecznie odwiedź nasze kanały tematyczne i buduj razem z nami społeczność frontstack.pl!</p>
  </div>
);

const slackLink = 'https://join.slack.com/t/frontstackpl/shared_invite/enQtNDg0MDI5NzExMzUxLTVmNjdmMjFhMzllYTUzM2JjMTZjMWZhNTE4NDU2OTgyNWE5NmFhNGYyMmI1YThiMGVhYjRjM2FhZWYzODYxMzY';

const showPopup = () => SlackModal.fire({
  title: <strong className="modal__slack--title">Jeżeli:</strong>,
  width: '40vw',
  customClass: 'modal__slack',
  html: ModalContent(),
  confirmButtonClass: 'modal__slack--confirm',
  showCloseButton: true,
  focusConfirm: false,
  confirmButtonText: <OutboundLink href={slackLink} target="_blank" rel="noopener noreferrer"> Otwórz #Slack </OutboundLink>,
  confirmButtonAriaLabel: 'Go to slack!'
});

const Topbar = () => (
  <div className="topbar--wrapper">
    <div className="left">
      <div className="talks">
        <div
          role="button" onClick={showPopup} tabIndex={0}
          onKeyDown={showPopup} className="talks--button"
        >
          <span className="talks--label">
            {'frontstack'}
            <span className="letter-red">T</span>
            {'alks'}
          </span>
          <span className="talks--infoBtn">info</span>
        </div>
      </div>
      <OutboundLink href={slackLink} target="_blank" rel="noopener noreferrer">
        <img src={slack} alt="slack" />
      </OutboundLink>
    </div>
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
        <div className="social--github"><OutboundLink href="https://github.com" target="_blank" rel="noopener noreferrer"><img src={github} alt="hithub" /></OutboundLink></div>
      </div>
    </div>
  </div>
);

export default Topbar;
