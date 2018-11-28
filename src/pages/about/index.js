import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

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
              <p>Frontstack.pl jest miejscem w którym możesz znaleźć najświeższe wiadomości ze świata front-endu, jak również wiele ciekawych artykułów omawiajacych najnowsze oraz najważniejsze aspekty front-end'owego ekosystemu.</p>
              <p>Frontstack.pl został stworzony z myślą o wspólnym dzieleniu się wiedzą oraz doświadczeniami, dlatego też kod strony jest dostępny na licencji <strong>open source</strong> i można znaleźć go pod tym <a href="https://github.com/frontstackpl" target="_blank" rel="noopener noreferrer" class="letter-red">adresem.</a> </p>
              <p>Liczymy na to, że strona frontstack.pl będzie w stanie pomóc wszystkim, zarówno doświadczonym jak i początkującym developerom, podnosić swoje umiejętności i wspólnie budować społeczność polskich front-end developerów. </p>
            </div>
            <div className="info--img" />
          </div>
        </section>
        <section className="section section-2">
          <div className="label label-regular">Tematy</div>
          <div className="topics">
            <ul className="topics__list">
              <TopicTile
                name="JavaScript"
                desc="Najważniejsze spoiwo wszystkich front-endowych technologii, czyli język JavaScript. W tym dziale znajdziesz wiele informacji na temat samego języka, najnowszej składni, testów, rozszerzeń ( np. TypeScript ) i wszystkiego co ma wspólnego z tym jednym z najpopularniejszych obecnie języków na świecie."
                link="js"
              />
              <TopicTile
                name="WEB"
                desc="Technologia, która jest prawdziwą esencją front-end'u czyli Web. W tym dziale zajmiemy się tworzeniem stron oraz aplikacji webowych/mobilnych. Skupimy się na obecnie najpopularniejszym frameworku - React, jak również dokładnie zostaną omówione takie zagadnienia jak JAM Stack, PWA, SASS oraz wiele, wiele innych najnowszych rozwiązań napędzających współczesny front-end."
                link="web"
              />
              <TopicTile
                name="Głos"
                desc="Kto powiedział, że front-end, to tylko przeglądarka? Wraz z upowszechnieniem się urządzeń takich jak Alexa Echo - głos, czyli nasza naturalna forma komunikacji, zaczyna być tak istotna, jak okno przeglądarki czy ekran smartfona. W tym dziale przyjrzymy się jak tworzyć aplikacje ( oczywiściu przy użyciu JavaScript'u ) na urządzenia obsługiwane głosem."
                link="voice"
              />
              <TopicTile
                name="FrontOps"
                desc="FrontOps, czyli nieco okrojona forma DevOps. Nie zajmujemy się na tej stronie back-end'em, więc skupimy się tylko na narzędziach, które ułatwiają nam rozwój front-end'owego oprogramowania w trybie CI/CD oraz pracę w środowisku 'serverless' - czyli to co front-endzi lubią najbardziej."
                link="frontOps"
              />
              <TopicTile
                name="API"
                desc="Nawet najszybsza i najpiękniejsza aplikacja internetowa nie będzie zbyt często odwiedzana, gdy nie będzie interaktywna oraz aktualizowana - najbardziej oczywistym źródłem informacji są bazy danych bądź zewnętrze serwisy. Jak pobrać z nich dane, jak radzić sobie z asynchronicznością, czym jest REST API, GraphQL, Apollo, Swagger ? Odpowiedzi do odnalezienia w tym dziale."
                link="api"
              />
              <TopicTile
                name="Produktywność"
                desc="Pisanie kodu oraz wytwarzanie nowych aplikacji jest głównym celem każdego developera. Warto przy tym znać narzędzia, które w sposób bezpośredni nie wspomagają pisanie samego kodu, ale pomagają zorganizować pracę oraz komunikację w zespole, śledzić ruch na stworzonych przez nas aplikacjach oraz podejmować odpowiednie decyzje projektowe. Slack, GIT, JIRA, Trello, Analytics - to tylko niektóre tematy, które zostaną poruszone w tej sekcji."
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
              <p>Frontstack.pl jest cały czas we wczesnej fazie rozwoju, więc gdzieniegdzie można spotkać małe bugi i niedociągnięcia. Chcemy jednak, aby strona ta była zawsze aktualna i korzystała z najnowszych technologii.</p>
              <p>Dlatego też mamy nadzieję, że rozrastająca się społeczność frontstack.pl będzie dbała o to, aby nasza strona była wzorcowym i perfekcyjnie przygotowanym produktem.</p>
              <p>Jeżeli widzisz jakiś błąd na stronie, wiesz, że coś można zrobić lepiej, szybciej, czyściej bądź masz pomysły na nowe funkcjonalności - przejdź na naszego <a href={slackLink} target="_blank" rel="noopener noreferrer" class="letter-red">Slack'a</a> i zgłoś nam swoje uwagi.</p>
              <p>Z drugiej strony, jeżeli masz pomysł na ciekawy artykuł, albo wiesz o ciekawym wydarzeniu front-endowym którego nie ma na naszej liście - również czekamy na Twoje sugestie.</p>
            </div>
          </div>
        </section>
        <section className="section section-4">
          <div className="label label-regular">Cześć,</div>
          <div className="info">
            <div className="info--text">
              <p>Mam na imię Kamil i jestem front-end developerem. Jako, że regularnie i z wielką przyjemnością śledzę wszelkie nowości w świecie front-endu, jakiś czas temu postanowiłem, że może dobrym pomysłem byłoby założyć osobistego bloga, aby dzielić się nowo zdobytą wiedzą oraz własnymi przemyśleniami z innymi developerami.</p>
              <p>Wtedy też, podczas pierwszych prac nad blogiem, pomyślałem sobie: "A może jednak coś więcej niż blog ?"</p>
              <p>Tak wpadł mi do głowy pomysł na nieduży portal, zrzeszający miłośników technologii front-endowych: <strong>FRONTSTACK.PL</strong></p>
              <p>Mam naprawdę wielką nadzieję, że już niedługo będę mógł usunąć tą sekcję, którą właśnie czytasz i na jej miejsce wstawić nową: <strong>ZESPÓŁ.</strong></p>
              <p>Do tego jeszcze długa droga i wiele artykułów do napisania - wierzę jednak, że moja praca pomoże jeszcze niejednemu ( początkującemu i doświadczonemu ) developerowi.</p>
            </div>
            <div className="info--img" />
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
