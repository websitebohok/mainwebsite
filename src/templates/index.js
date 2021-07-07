import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItem"
import styled from "styled-components"
import Banner from "../components/Banner"

const FeaturedItems = styled.h4`
  font-size: var(--h5);
  color: var(--primaryColor);
`

const HomePage = ({ data }) => {
  const { HomePageQuery, BlogPostQuery } = data

  return (
    <>
      <Seo
        title={HomePageQuery.frontmatter.title}
        description={HomePageQuery.frontmatter.description}
      />
      <Banner content={HomePageQuery.frontmatter.title} />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: HomePageQuery.html }}
      />
      <FeaturedItems>{BlogPostQuery.totalCount} Featured Posts</FeaturedItems>
      {BlogPostQuery.edges.map(({ node }, index) => (
        <BlogItem nodeObj={node} itemKey={`blog-post-${index}`} />
      ))}
    </>
  )
}

export default HomePage

export const query = graphql`
  {
    HomePageQuery: markdownRemark(
      frontmatter: { templateKey: { eq: "index" } }
    ) {
      frontmatter {
        title
        description
      }
      html
    }

    BlogPostQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "post" } } }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            path
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP]
                )
              }
            }
            featuredImageAlt
          }
          excerpt
        }
      }
    }
  }
`
