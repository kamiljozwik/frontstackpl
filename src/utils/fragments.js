import { graphql } from 'gatsby';

export const allPostsFragment = graphql`
fragment BlogPostFields on ContentfulBlogEntry {
    title
    createdAt
    slug
    tags
    lead {
        description
        file {
            url
        }
    }
    createdAt
    content {
        childMarkdownRemark {
            html
        }
    }
    author
    inspirations
    related {
        tags
        slug
        title
        createdAt
        lead {
            file {
                url
            }
        }
    }
}
`;

export const landingPagePosts = graphql`
fragment LandingBlogPostFields on ContentfulBlogEntry {
    title
    createdAt
    slug
    tags
    lead {
        file {
            url
        }
    }
}
`;
