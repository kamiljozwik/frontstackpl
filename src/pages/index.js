import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
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
        <li key={post.node.slug} className="tags__list--item" style={{ backgroundImage: `${index === 0 ? `url(${post.node.lead.file.url}?w=385&h=300&fl=progressive&q=50&fit=fill)` : ''}` }}>
          <div className="item--title">
            <h3>
              <Link to={`${post.node.tags[0]}/post/${post.node.slug}`}>{ post.node.title }</Link>
            </h3>
          </div>
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

function IndexPage({ data }) {
  const latestPosts = data.allContentfulBlogEntry.edges;
  const Codeless = data.Codeless ? data.Codeless.edges : [];
  const JSPosts = data.JSPosts ? data.JSPosts.edges : [];
  const ToolboxItems = data.Toolbox ? data.Toolbox.edges : [];
  const WebPosts = data.WebPosts ? data.WebPosts.edges : [];
  const VoicePosts = data.VoicePosts ? data.VoicePosts.edges : [];
  const FrontOps = data.FrontOps ? data.FrontOps.edges : [];
  const API = data.API ? data.API.edges : [];
  const Prod = data.Prod ? data.Prod.edges : [];
  const Quote = data.Quote ? data.Quote.edges[0].node : [];

  return (
    <Layout type="landing-page" currentPage="main">
      <SEO
        title="Frontstack.pl - Front-End po polsku"
        url="https://frontstack.pl"
        isBlogPost={false}
      />
      <HeaderLanding latestPosts={latestPosts} toolboxItems={ToolboxItems} />
      <section className="landing-page__tags codeless">
        {Codeless.length > 0
              && (
                <>
                  <div className="codeless">
                    {
                      Codeless.map(post => <CodelessItem key={post.node.slug} post={post} />)
                    }
                  </div>
                  <Link to="/codeless" className="tags__readAll seeMore">Sprawdź wszystkie</Link>
                </>
              )}
      </section>
      <section className="landing-page__tags part1">
        <div className="tags">
          {<TagsColumn posts={JSPosts} label="JavaScript" link="js" />}
          {<TagsColumn posts={WebPosts} label="Web" link="web" />}
          {<TagsColumn posts={VoicePosts} label="Głos" link="voice" />}
        </div>
      </section>
      <section className="landing-page__show">
        <div className="show">
          <div className="show--image" />
          <div className="show--text">
            <div className="show--label label-small">SHOW ROOM</div>
            <div className="show--content">
              <p>Teoria, tutoriale, przykłady - wszystko to jest bardzo ważnym składnikiem nauki programowania. Najistotniejszym jednak elementem w tej układance jest praktyka.{' '}<strong>Show Room</strong>{' '} jest miejscem w którym możesz znaleźć żywe implementacje ciekawych elementów UI, komponentów, animacji, całych stron, itp.</p> { /* eslint-disable-line */ }
              <p>Jeżeli chcesz podzielić się z nami swoją własną implemetacją któregoś z w/w elementów, koniecznie przedstaw nam swój pomysł! </p>
              <div className="show--seeMore seeMore"><Link to="/show">sprawdź</Link></div>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-page__tags part2">
        <div className="tags">
          {<TagsColumn posts={FrontOps} label="FrontOps" link="frontops" />}
          {<TagsColumn posts={API} label="API" link="api" />}
          {<TagsColumn posts={Prod} label="Produktywność" link="prod" />}
        </div>
      </section>
      <section className="landing-page__quote">
        <div className="quote">
          <div className="quote--text">
            <div className="quote--content">
              {Quote.content.content}
            </div>
            <div className="quote--author">
              {`~ ${Quote.author}`}
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
    Toolbox: allContentfulToolEntry {
      edges {
        node {
          category
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
