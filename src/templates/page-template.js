import React from "react"
import { graphql } from "gatsby"
// import { getImage, GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import Page from "./templates-components/PageComponents"
import { HTMLContent } from "../components/Content"

const PageTemplate = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html, excerpt },
  } = data

  return (
    <Page
      image={frontmatter.featuredImage}
      imageAlt={frontmatter.featuredImageAlt}
      SEOtitle={frontmatter.SEO.SEOtitle}
      SEOdescription={frontmatter.SEO.SEOdescription || excerpt}
      title={frontmatter.title}
      html={html}
      contentComponent={HTMLContent}
    />
  )
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PageTemplate

export const pageQuery = graphql`
  query PageTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        SEO {
          SEOtitle
          SEOdescription
        }
        title
        featuredImage
        featuredImageAlt
      }
    }
  }
`
