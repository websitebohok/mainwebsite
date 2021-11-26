import React from "react"
import { useLocation } from "@reach/router"
import { graphql } from "gatsby"
// import { getImage, GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import Post from "./templates-components/PostComponents"
import { HTMLContent } from "../components/Content"

const PostTemplate = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
    markdownRemark: { timeToRead, frontmatter, html },
  } = data

  const location = useLocation()

  return (
    <Post
      SEOtitle={frontmatter.title}
      SEOdescription={frontmatter.description}
      SEOimage={frontmatter.featuredImage}
      SEOimageAlt={frontmatter.featuredImageAlt}
      location={location}
      title={frontmatter.title}
      description={frontmatter.description}
      date={frontmatter.date}
      category={frontmatter.category}
      author={frontmatter.author}
      timeToRead={timeToRead}
      html={html}
      contentComponent={HTMLContent}
      similarPost={edges}
    />
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostTemplate

export const pageQuery = graphql`
  query PostTemplate($slug: String!, $category: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
        category
        description
        author
        featuredImage
        featuredImageAlt
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "post-template" }
          category: { in: [$category] }
        }
        fields: { slug: { ne: $slug } }
      }
      limit: 10
    ) {
      edges {
        node {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`
