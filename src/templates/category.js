import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItem"
import Button from "../components/Button"
import { PagerStyles } from "../styles/JournalStyles"
import Banner from "../components/Banner"

const _ = require("lodash")
const Category = (props) => {
  const { markdownRemark, allMarkdownRemark } = props.data
  const edges = allMarkdownRemark.edges

  const { slug, category } = props.pageContext

  return (
    <>
      <Seo title="Read more about the projects at Bonneville" />
      <Banner content={markdownRemark.frontmatter.title} />
      <div
        className="page-content"
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
      />
      {edges.map(({ node }, index) => {
        return <BlogItem nodeObj={node} itemKey={`blog-post-${index}`} />
      })}
    </>
  )
}

export default Category

export const journalQuery = graphql`
  query ($category: String) {
    markdownRemark(
      frontmatter: {
        templateKey: { eq: "category" }
        category: { eq: $category }
      }
    ) {
      html
      frontmatter {
        path
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "post" }
          category: { in: [$category] }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            category
            title
            date(formatString: "MMM DD, YYYY")
            path
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
