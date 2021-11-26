import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Category from "./templates-components/CategoryComponents"
import { HTMLContent } from "../components/Content"

const CategoryTemplate = ({ data, pageContext }) => {
  const {
      markdownRemark: { html, excerpt, frontmatter },
      allMarkdownRemark: { yearGroup, linksGroup },
    } = data,
    { category } = pageContext

  return (
    <Category
      SEOtitle={frontmatter.SEO.SEOtitle}
      SEOdescription={frontmatter.SEO.SEOdescription || excerpt}
      html={html}
      contentComponent={HTMLContent}
      title={frontmatter.title}
      category={category}
      yearGroup={yearGroup}
      linksGroup={linksGroup}
    />
  )
}

CategoryTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryTemplate(
    $slug: String!
    $category: String
    $isPranala: Boolean!
  ) {
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "post-template" }
          category: { in: [$category] }
        }
      }
    ) {
      yearGroup: group(field: fields___year) @skip(if: $isPranala) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              title
              date(formatString: "MMM DD")
            }
          }
        }
        fieldValue
      }
      linksGroup: group(field: frontmatter___webname) @include(if: $isPranala) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              title
              date(formatString: "MMM DD, YYYY")
              path
            }
          }
        }
        fieldValue
      }
    }
  }
`
