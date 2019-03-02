import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import seoImage from '../styles/img/graphics/frontstack.jpg';

function SEO({ title, description, meta, keywords, url, image, isBlogPost }) {
  return (
    <StaticQuery
      query={detailsQuery}  // eslint-disable-line
      render={(data) => {
        const metaDescription = description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang: 'pl',
            }}
            title={title}
            // titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:site_name`,
                content: `frontstackpl`,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `${isBlogPost ? 'article' : 'website'}`,
              },
              {
                property: `og:url`,
                content: url,
              },
              {
                property: `og:image`,
                content: image,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  meta: [],
  keywords: ['frontend', 'front-end', 'javascript', 'react', 'reactjs', 'web-development', 'html', 'css'],
  description: '',
  isBlogPost: true,
  image: seoImage
};

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
  isBlogPost: PropTypes.bool
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
