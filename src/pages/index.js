import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import nanoid from 'nanoid';
import moment from 'moment';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import HeaderLanding from '../components/header/Landing';

const CodelessItem = ({ post }) => (
  <div className="tags__column">
    <div className="tags__list">
      <div className="tags__list--item" style={{ backgroundImage: `url(${post.node.lead.file.url}?w=770&h=300&fl=progressive&q=50&fit=fill)` }}>
        <div className="item--title"><Link to={`${post.node.tags[0]}/post/${post.node.slug}`}>{ post.node.title }</Link></div>
        <div className="item--footer">
          <div className="item--date">{ moment(post.node.createdAt).format('DD/MM/YYYY') }</div>
          <div className="item--seeMore seeMore"><Link to={`${post.node.tags[0]}/post/${post.node.slug}`}>czytaj</Link></div>
        </div>
      </div>
    </div>
  </div>
);

const TagsColumn = ({ posts, label, link }) => (
  <div className="tags__column">
    <div className="tags__label label-regular">{label}</div>
    <ul className="tags__list">
      {posts.map((post, index) => (
        <li key={nanoid()} className="tags__list--item" style={{ backgroundImage: `${index === 0 ? `url(${post.node.lead.file.url}?w=385&h=300&fl=progressive&q=50&fit=fill)` : ''}` }}>
          <div className="item--title"><Link to={`${post.node.tags[0]}/post/${post.node.slug}`}>{ post.node.title }</Link></div>
          <div className="item--footer">
            <div className="item--date">{ moment(post.node.createdAt).format('DD/MM/YYYY') }</div>
            <div className="item--seeMore seeMore"><Link to={`${post.node.tags[0]}/post/${post.node.slug}`}>czytaj</Link></div>
          </div>
        </li>
      ))
      }
      {posts.length > 0
        ? (
          <Link to={`/${link}`} className="tags__readAll seeMore">Sprawdź wszystkie</Link>
        ) : (
          <div className="tags__readAll noPosts">Brak postów</div>
        )}
    </ul>
  </div>
);

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.latestPosts = this.props.data.allContentfulBlogEntry.edges;
    this.Codeless = this.props.data.Codeless ? this.props.data.Codeless.edges : [];
    this.JSPosts = this.props.data.JSPosts ? this.props.data.JSPosts.edges : [];
    this.WebPosts = this.props.data.WebPosts ? this.props.data.WebPosts.edges : [];
    this.VoicePosts = this.props.data.VoicePosts ? this.props.data.VoicePosts.edges : [];
    this.FrontOps = this.props.data.FrontOps ? this.props.data.FrontOps.edges : [];
    this.API = this.props.data.API ? this.props.data.API.edges : [];
    this.Prod = this.props.data.Prod ? this.props.data.Prod.edges : [];
    this.Events = this.props.data.Events ? this.props.data.Events.edges : [];
    this.News = this.props.data.News ? this.props.data.News.edges : [];
    this.Quote = this.props.data.Quote ? this.props.data.Quote.edges[0].node : [];
  }

  render() {
    return (
      <Layout type="landing-page" currentPage="main">
        <SEO
          title="frontstack.pl" description="" image=""
          url="https://frontstack.pl" keywords={[`frontstackpl`]}
        />
        <HeaderLanding latestPosts={this.latestPosts} news={this.News} />
        <section className="landing-page__tags codeless">
          {this.Codeless.length > 0
          && (
            <>
              <div className="codeless">
                {
                  this.Codeless.map(post => <CodelessItem key={nanoid()} post={post} />)
                }
              </div>
              <Link to="/codeless" className="tags__readAll seeMore">Sprawdź wszystkie</Link>
            </>
          )}
        </section>
        <section className="landing-page__tags part1">
          <div className="tags">
            {<TagsColumn posts={this.JSPosts} label="JavaScript" link="js" />}
            {<TagsColumn posts={this.WebPosts} label="Web" link="web" />}
            {<TagsColumn posts={this.VoicePosts} label="Głos" link="voice" />}
          </div>
        </section>
        <section className="landing-page__show">
          <div className="show">
            <div className="show--image" />
            <div className="show--text">
              <div className="show--label label-small">SHOW ROOM</div>
              <div className="show--content">
                <p>Teoria, tutoriale, przykłady - wszystko to jest bardzo ważnym składnikiem nauki programowania. Najistotniejszym jednak elementem w tej układance jest praktyka. <strong>Show Room</strong> jest miejscem w którym możesz znaleźć żywe implementacje ciekawych elementów UI, komponentów, animacji, całych stron, itp.</p>
                <p>Jeżeli chcesz podzielić się z nami swoją własną implemetacją któregoś z w/w elementów, koniecznie zajrzyj na <strong>Slacku</strong> na kanał poświęcony Show Room'owi i przedstaw nam swój pomysł! </p>
                <div className="show--seeMore seeMore"><Link to="/show">sprawdź</Link></div>
              </div>
            </div>
          </div>
        </section>
        <section className="landing-page__tags part2">
          <div className="tags">
            {<TagsColumn posts={this.FrontOps} label="FrontOps" link="frontops" />}
            {<TagsColumn posts={this.API} label="API" link="api" />}
            {<TagsColumn posts={this.Prod} label="Produktywność" link="prod" />}
          </div>
        </section>
        <section className="landing-page__quote">
          <div className="quote">
            <div className="quote--text">
              <div className="quote--content">
                {this.Quote.content.content}
              </div>
              <div className="quote--author">
                {`~ ${this.Quote.author}`}
              </div>
            </div>
            <div className="quote--image-wrapper">
              <div className="quote--image" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlogEntry (
      limit: 5
      filter: {
        node_locale: {eq: "pl-PL"}
        tags: {nin: "codeless"}
      },
      sort: {fields: [createdAt], order: DESC}
    )
    {
      edges {
        node {
          ...LandingBlogPostFields
        }
      }
    }
    Codeless: allContentfulBlogEntry (
      limit: 2
      filter: {
        node_locale: {eq: "pl-PL"}
        tags: {in: "codeless"}
      },
      sort: {fields: [createdAt], order: DESC}
    )
    {
      edges {
        node {
        ...LandingBlogPostFields
        }
      }
    }
    JSPosts: allContentfulBlogEntry (
      limit: 3
      filter: {
        node_locale: {eq: "pl-PL"}
        tags: {in: "js"}
      },
      sort: {fields: [createdAt], order: DESC}
    )
    {
      edges {
        node {
        ...LandingBlogPostFields
        }
      }
    }
    WebPosts: allContentfulBlogEntry (
      limit: 3
      filter: {
        node_locale: {eq: "pl-PL"}
        tags: {in: "web"}
      },
      sort: {fields: [createdAt], order: DESC}
    )
    {
      edges {
        node {
          ...LandingBlogPostFields
        }
      }
    } 
    VoicePosts: allContentfulBlogEntry (
      limit: 3
      filter: {
        node_locale: {eq: "pl-PL"}
        tags: {in: "voice"}
      },
      sort: {fields: [createdAt], order: DESC}
    )
    {
      edges {
        node {
          ...LandingBlogPostFields
        }
      }
    }
    FrontOps: allContentfulBlogEntry (
      limit: 3
      filter: {
        node_locale: {eq: "pl-PL"}
        tags: {in: "frontops"}
      },
      sort: {fields: [createdAt], order: DESC}
    )
    {
      edges {
        node {
          ...LandingBlogPostFields
        }
      }
    }
    API: allContentfulBlogEntry (
      limit: 3
      filter: {
        node_locale: {eq: "pl-PL"}
        tags: {in: "api"}
      },
      sort: {fields: [createdAt], order: DESC}
    )
    {
      edges {
        node {
          ...LandingBlogPostFields
        }
      }
    }
    Prod: allContentfulBlogEntry (
      limit: 3
      filter: {
        node_locale: {eq: "pl-PL"}
        tags: {in: "prod"}
      },
      sort: {fields: [createdAt], order: DESC}
    )
    {
      edges {
        node {
          ...LandingBlogPostFields
        }
      }
    }
    Events: allContentfulEventEntry (
      sort: {fields: [date], order: ASC}
      limit: 5
    ) {
        edges {
          node {
            title
            slug
            place
            date
            isFree
            link
          }
        }
      }
      News: allContentfulNewsEntry (
        sort: {fields: [createdAt], order: DESC}
        limit: 6
        ) {
        edges {
          node {
            id
            title
            slug
            createdAt
            content {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
      Quote: allContentfulQuoteEntry {
        edges {
          node {
            content {
              content
            }
            author
          }
        }
      }
  }
`;
