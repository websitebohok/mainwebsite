import React from "react"
import { graphql } from "gatsby"
import Banner from "../components/Banner"
import Seo from "../components/SEO"

const PageTemplate = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => {
  // const {
  //   markdownRemark: { frontmatter, html },
  // } = data

  return (
    <>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <div className="page-standard">
        <Banner content={frontmatter.title} />
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
      }
    }
  }
`
