import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Contact from "./templates-components/ContactComponent"

const ContactTemplate = ({ data }) => {
  const {
    markdownRemark: { excerpt, html, frontmatter },
  } = data

  return (
    <Contact
      SEOtitle={frontmatter.SEO.SEOtitle}
      SEOdescription={frontmatter.SEO.SEOdescription || excerpt}
      html={html}
      title={frontmatter.title}
    />
  )
}

ContactTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactTemplate

export const pageQuery = graphql`
  query ContactPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        SEO {
          SEOtitle
          SEOdescription
        }
        title
      }
    }
  }
`
