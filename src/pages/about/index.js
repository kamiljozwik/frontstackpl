import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import browserstack from '../../styles/img/graphics/browserstack.png';

const TopicTile = ({ name, desc, link }) => (
  <li className={`item ${link}`}>
    <div className="item--title">{name}</div>
    <div className="item--desc">{desc}</div>
    <Link to={`/${link}`} className="item--link seeMore">sprawdź</Link>
  </li>
);

const slackLink = 'https://join.slack.com/t/frontstackpl/shared_invite/enQtNDg0MDI5NzExMzUxLTVmNjdmMjFhMzllYTUzM2JjMTZjMWZhNTE4NDU2OTgyNWE5NmFhNGYyMmI1YThiMGVhYjRjM2FhZWYzODYxMzY';

const About = ({ data }) => (
  <React.Fragment>
    <Layout type="withoutHeader" currentPage="main">
      <div className="about-wrapper">
        <section className="section section-1">
          <div className="label label-regular">Czym jest frontstack.pl ?</div>
          <div className="info">
            <div className="info--text">
              <p>Frontstack.pl jest miejscem w którym możesz znaleźć najświeższe wiadomości ze świata front-endu, jak również wiele ciekawych artykułów omawiajacych najnowsze oraz najważniejsze aspekty front-endowego ekosystemu.</p>
              { /* <p>Frontstack.pl został stworzony z myślą o wspólnym dzieleniu się wiedzą oraz doświadczeniami, dlatego też kod strony jest dostępny na licencji <strong>open source</strong> i można znaleźć go pod tym <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="letter-red">adresem.</a> </p> */}
              <p>Frontstack.pl został stworzony z myślą o wspólnym dzieleniu się wiedzą oraz doświadczeniami, dlatego też już niedługo (po skończeniu pisania README, contributing guide oraz code of conduct) pojawi się tutaj link do repozytorium z kodem źródłowym tego bloga.</p>
              <p>Liczę na to, że strona frontstack.pl będzie w stanie pomóc wszystkim, zarówno doświadczonym jak i początkującym developerom, podnosić swoje umiejętności i wspólnie budować społeczność polskich front-end developerów. </p>
            </div>
          </div>
        </section>
        <section className="section section-2">
          <div className="label label-regular">Tematy</div>
          <div className="topics">
            <ul className="topics__list">
              <TopicTile
                name="JavaScript"
                desc="Najważniejsze spoiwo wszystkich front-endowych technologii, czyli język JavaScript. W tym dziale znajdziesz wiele informacji na temat samego języka, najnowszej składni, testów, rozszerzeń ( np. TypeScript ) i wielu innych zagadnień związanych z najpopularniejszym obecnie językiem programowania na świecie."
                link="js"
              />
              <TopicTile
                name="WEB"
                desc="Technologia, która jest prawdziwą esencją front-end'u czyli Web. W tym dziale zajmiemy się tworzeniem stron oraz aplikacji webowych/mobilnych. Skupimy się na obecnie najpopularniejszym frameworku - React, jak również dokładnie zostaną omówione takie zagadnienia jak JAM Stack, PWA, SASS oraz wiele, wiele innych najnowszych rozwiązań napędzających współczesny front-end."
                link="web"
              />
              <TopicTile
                name="Głos"
                desc="Kto powiedział, że front-end, to tylko przeglądarka? Wraz z upowszechnieniem się urządzeń takich jak Amazon Echo - głos, czyli nasza naturalna forma komunikacji, zaczyna być tak istotna, jak okno przeglądarki czy ekran smartfona. W tym dziale przyjrzymy się jak tworzyć aplikacje ( oczywiściu przy użyciu JavaScript'u ) na urządzenia obsługiwane głosem."
                link="voice"
              />
              <TopicTile
                name="FrontOps"
                desc="FrontOps, czyli nieco okrojona forma DevOps. Nie zajmujemy się na tej stronie back-endem, więc skupimy się tylko na narzędziach, które ułatwiają nam rozwój front-endowego oprogramowania w trybie CI/CD oraz pracę w środowisku 'serverless' - czyli to co front-endzi lubią najbardziej."
                link="frontOps"
              />
              <TopicTile
                name="API"
                desc="Nawet najszybsza i najpiękniejsza aplikacja internetowa nie będzie zbyt często odwiedzana, gdy nie będzie aktualizowana - najbardziej oczywistym źródłem informacji są bazy danych bądź zewnętrze serwisy. Jak pobrać z nich dane, jak radzić sobie z asynchronicznością, czym jest REST API, GraphQL, Apollo, Swagger ? Odpowiedzi do odnalezienia w tym dziale."
                link="api"
              />
              <TopicTile
                name="Produktywność"
                desc="Pisanie kodu oraz wytwarzanie nowych aplikacji jest głównym celem każdego developera. Warto przy tym znać narzędzia, które w sposób bezpośredni nie wspomagają pisania samego kodu, ale pomagają zorganizować pracę oraz komunikację w zespole, śledzić ruch na stworzonych przez nas aplikacjach oraz podejmować odpowiednie decyzje projektowe. Slack, GIT, JIRA, Trello, Analytics - to tylko niektóre tematy, które zostaną poruszone w tej sekcji."
                link="prod"
              />
            </ul>
          </div>
        </section>
        <section className="section section-3">
          <div className="label label-regular">Przyłącz się</div>
          <div className="info">
            <div className="info--img" />
            <div className="info--text">
              <p>Frontstack.pl jest cały czas we wczesnej fazie rozwoju, więc gdzieniegdzie można spotkać małe bugi i niedociągnięcia. Będę się jednak starał, aby strona ta była zawsze aktualna i korzystała z najnowszych technologii.</p>
              <p>Jeżeli widzisz jakiś błąd na stronie, wiesz, że coś można zrobić lepiej, szybciej, czyściej, bądź masz pomysły na nowe funkcjonalności - przejdź na <a href={slackLink} target="_blank" rel="noopener noreferrer" class="letter-red">Slacka</a> i zgłoś swoje uwagi.</p>
              <p>Z drugiej strony, jeżeli masz pomysł na ciekawy artykuł, albo wiesz o ciekawym wydarzeniu front-endowym którego nie ma na liście - również czekam na Twoje sugestie. Z wielką przyjemnością umieszczę twój wpis na tym blogu.</p>
            </div>
          </div>
        </section>
        <section className="section section-4">
          <div className="label label-regular">Cześć,</div>
          <div className="info">
            <div className="info--text">
              <p>mam na imię Kamil i jestem front-end developerem. Jako, że regularnie i z wielką przyjemnością śledzę wszelkie nowości w świecie front-endu, jakiś czas temu postanowiłem, że może dobrym pomysłem byłoby założyć osobistego bloga, aby dzielić się nowo zdobytą wiedzą oraz własnymi przemyśleniami z innymi developerami.</p>
              <p>Wtedy też, podczas pierwszych prac nad blogiem, ciągle wpadały mi do głowy pomysły na nowe tematy oraz funkcjonalności, które rozbudowały ten projekt do czegoś nieco więcej niż tylko blog osobisty.</p>
              <p>Tak powstał <strong>frontstack.pl</strong> - blog skupiony wokół wszystkiego co związane z szeroko pojętym front-endem. Mam nadzieję, że każdy odwiedzający znajdzie tutaj coś interesującego dla siebie.</p>
            </div>
            <div className="info--img" />
          </div>
        </section>
        <section className="section section-5">
          <div className="label label-regular">Partnerzy</div>
          <div className="partners">
            <ul className="partners_list">
              <li className="partner">
                <a href="https://www.browserstack.com/" target="_blank" rel="noopener noreferrer"><img src={browserstack} alt="browserstack" /></a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  </React.Fragment>
);

export default About;


About.propTypes = {
  data: PropTypes.object
};

About.defaultProps = {
  data: {}
};
