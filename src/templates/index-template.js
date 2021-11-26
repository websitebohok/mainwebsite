import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HTMLContent } from "../components/Content"
import Index from "./templates-components/IndexComponent"

const IndexTemplate = ({ data }) => {
  const {
    HomePageQuery: { frontmatter, html },
    FeaturedPostQuery,
    LatestPostQuery,
  } = data

  return (
    <Index
      SEOtitle={frontmatter.SEO.SEOtitle}
      SEOdescription={frontmatter.SEO.SEOdescription || frontmatter.description}
      title={frontmatter.title}
      description={frontmatter.description}
      image={frontmatter.heroImage}
      imageAlt={frontmatter.featuredImageAlt}
      html={html}
      contentComponent={HTMLContent}
      FeaturedPostQuery={FeaturedPostQuery}
      LatestPostQuery={LatestPostQuery}
    />
  )
}

IndexTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexTemplate

export const query = graphql`
  query IndexTemplate($slug: String!) {
    HomePageQuery: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        SEO {
          SEOtitle
          SEOdescription
        }
        title
        description
        heroImage
        featuredImageAlt
      }
      html
    }

    FeaturedPostQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "post-template" }
          featuredpost: { eq: true }
        }
      }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMM DD, YYYY")
            category
            path
            webname
          }
          timeToRead
        }
      }
    }
    LatestPostQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "post-template" } } }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMM DD, YYYY")
            category
            path
            webname
          }
          timeToRead
        }
      }
    }
  }
`
