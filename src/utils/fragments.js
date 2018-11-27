import { graphql } from 'gatsby';

export const allPostsFragment = graphql`
fragment BlogPostFields on ContentfulBlogEntry {
    title
    createdAt
    slug
    tags
    lead {
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

export const NewsQuery = graphql`
fragment NewsFields on ContentfulBlogEntry {
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

