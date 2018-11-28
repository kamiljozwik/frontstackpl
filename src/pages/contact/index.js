import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import ContactForm from './Form';
import Layout from '../../components/layout';
import facebook from '../../styles/img/logos/social/facebook--black.svg';
import twitter from '../../styles/img/logos/social/twitter--black.svg';
import slack from '../../styles/img/logos/social/slack--black.svg';
import mail from '../../styles/img/icons/mail.svg';

const slackLink = 'https://join.slack.com/t/frontstackpl/shared_invite/enQtNDg0MDI5NzExMzUxLTVmNjdmMjFhMzllYTUzM2JjMTZjMWZhNTE4NDU2OTgyNWE5NmFhNGYyMmI1YThiMGVhYjRjM2FhZWYzODYxMzY';

const Contact = () => (
  <React.Fragment>
    <Layout type="withoutHeader" currentPage="main">
      <div className="contact-wrapper">
        <div className="label label-regular">Kontakt</div>
        <div className="contact">
          <div className="contact__links">
            <div className="label label-small">Social</div>
            <div className="contact__links--slack">
              <a href={slackLink} target="_blank" rel="noopener noreferrer">
                <img src={slack} alt="slack" />
              </a>
              <div className="slack-desc">
                <p>Najszybszą formą komunikacji, zarówno z administratorem strony jak i innymi członkami naszej społeczności są nasze kanały na Slack'u. Zapraszamy do skorzystania z tej metody kontaktu.</p>
                <div className="seeMore"><OutboundLink href={slackLink} target="_blank" rel="noopener noreferrer">przejdź</OutboundLink></div>
              </div>
            </div>
            <div className="contact__links--social">
              <div className="social--fb"><OutboundLink href="https://www.facebook.com/frontstackpl/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></OutboundLink></div>
              <div className="social--twitter"><OutboundLink href="https://twitter.com/frontstackpl" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></OutboundLink></div>
              <div className="email"><a href="mailto: kontakt@frontstack.pl"><img className="mail-ico" src={mail} alt="mail" /></a></div>
            </div>
          </div>
          <div className="contact__form">
            <div className="label label-small">Formularz kontaktowy</div>
            <ContactForm />
          </div>
        </div>
        <div className="support">
          <div className="label label-regular">Wsparcie</div>
          <div className="support__desc">
            <p>Frontstack.pl jest projektem open source i w całości jest finansowany oraz utrzymywany przez jego twórcę. Jeżeli podobają Ci się treści udostępniane na stronie, wspomóż projekt przekazując na nasze konto niewielką kwotę, która umożliwi nam opłacenie wszystkich usług i narzędzi, dzięki którym frontstack.pl ma szansę funkcjonować w sieci.</p>
            <p>Link wkrótce...</p>
          </div>
        </div>
      </div>
    </Layout>
  </React.Fragment>
);

export default Contact;
