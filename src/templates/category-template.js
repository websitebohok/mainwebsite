import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogGroup from "../components/BlogGroup"
import styled from "styled-components"
import Banner from "../components/Banner"
import PropTypes from "prop-types"

const CategoryStyle = styled.div`
  width: 100%;
  box-sizing: border-box;
`

const Category = ({
  title,
  description,
  html,
  category,
  linksGroup,
  yearGroup,
}) => {
  return (
    <>
      <Seo title={title} description={description} />
      <CategoryStyle>
        <Banner content={title} />
        {html && (
          <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
        <div className="br-line" />
        {category === "links" ? (
          <BlogGroup group={linksGroup} category={category} />
        ) : (
          <BlogGroup group={yearGroup} category={category} />
        )}
      </CategoryStyle>
    </>
  )
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  linksGroup: PropTypes.array,
  yearGroup: PropTypes.array,
}

const CategoryTemplate = ({ data, pageContext }) => {
  const {
      markdownRemark: { html, excerpt, frontmatter },
      allMarkdownRemark: { yearGroup, linksGroup },
    } = data,
    { category } = pageContext

  return (
    <Category
      html={html}
      title={frontmatter.title}
      description={excerpt || frontmatter.description}
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
    $isLinks: Boolean!
  ) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        description
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
      yearGroup: group(field: fields___year) @skip(if: $isLinks) {
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
      linksGroup: group(field: frontmatter___webname) @include(if: $isLinks) {
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
