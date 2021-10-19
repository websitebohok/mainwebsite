import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogCategory from "../components/BlogCategory"
import styled from "styled-components"
import Banner from "../components/Banner"
import PropTypes from "prop-types"

const CategoryStyle = styled.div`
  width: 100%;
  box-sizing: border-box;
`

const Category = ({
  SEOtitle,
  SEOdescription,
  title,
  html,
  category,
  linksGroup,
  yearGroup,
}) => {
  return (
    <>
      <Seo title={SEOtitle} description={SEOdescription} />
      <CategoryStyle>
        <Banner content={title} />
        {html && (
          <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
        <div className="br-line" />
        {category === "pranala" ? (
          <BlogCategory group={linksGroup} category={category} />
        ) : (
          <BlogCategory group={yearGroup} category={category} />
        )}
      </CategoryStyle>
    </>
  )
}

Category.propTypes = {
  SEOtitle: PropTypes.string,
  SEOdescription: PropTypes.string,
  title: PropTypes.string.isRequired,
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
      SEOtitle={frontmatter.SEO.SEOtitle}
      SEOdescription={frontmatter.SEO.SEOdescription || excerpt}
      html={html}
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
