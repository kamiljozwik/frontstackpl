import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import nanoid from 'nanoid';
import moment from 'moment';
import Layout from '../../components/layout';

const EventsColumn = ({ events }) => (
  <div className="events">
    <div className="events__label label-regular">Nadchodzące wydarzenia</div>
    <ul className="events__list">
      {events.map(event => (
        <li key={nanoid()} className="events__list--item">
          <div className="event__data">
            <div className="title"><a href={event.node.link}>{ event.node.title }</a></div>
            <div className="place">{ event.node.place }</div>
            <div className="date">{ moment(event.node.date).format('DD/MM/YYYY') }</div>
            <div className="isFree">{ event.node.isFree ? <span>FREE</span> : <></> }</div>
          </div>
          <div className="event__desc">
            <div className="desc">{ event.node.description.description }</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Events = ({ data }) => (
  <React.Fragment>
    <Layout type="withoutHeader" currentPage="main">
      <div className="events-wrapper">
        {<EventsColumn events={data.Events.edges} />}
      </div>
    </Layout>
  </React.Fragment>
);

export default Events;


Events.propTypes = {
  data: PropTypes.object
};

Events.defaultProps = {
  data: {}
};


export const pageQuery = graphql`
query eventsQuery {
  Events: allContentfulEventEntry(
    sort: {fields: [date], order: ASC}
    ) {
    edges {
      node {
        title
        slug
        place
        date
        description {
          description
        }
        isFree
        link
      }
    }
  }
}
`;
