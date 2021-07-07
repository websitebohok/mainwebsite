import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import { GatsbyImage } from "gatsby-plugin-image"
import Share from "../components/ShareContainer"
import Button from "../components/Button"
import Banner from "../components/Banner"
import styled from "styled-components"

const _ = require("lodash")

const BlogPostStyles = styled.div`
  .meta {
    h2 {
      font-size: var(--h6);
      color: var(--primaryColor);
      margin: calc(var(--spacing) / 2) 0;
    }
  }

  .post-img {
    margin: calc(var(--spacing) * 2) 0;

    @media (min-width: 1200px) {
      margin: calc(var(--spacing) * 4) 0;
    }
  }

  .blog-post-content {
    p {
      font-weight: 400;
      font-size: 0.85rem;
      color: var(--charcoal);
    }
  }

  a {
    text-decoration: none;
    margin-right: calc(var(--spacing) / 2);
    position: relative;

    // &:after {
    //   content: "";
    //   display: block;
    //   position: absolute;
    //   height: 0.1rem;
    //   width: 100%;
    //   background-color: var(--charcoal);
    //   left: 0;
    //   bottom: -0.2rem;
    //   opacity: 1;
    //   transition: opacity var(--transSlow);
    // }

    &:hover,
    &:focus {
      cursor: pointer;

      &:after {
        opacity: 0.15;
      }
    }

    &::last-child {
      margin-right: 0;
    }
  }
`

export default function Template({ data }) {
  let location = useLocation()
  const {
    markdownRemark: { frontmatter, html },
  } = data // Object destructuring
  let featuredImgFluid =
    frontmatter.featuredImage.childImageSharp.gatsbyImageData
  const categoryCase = _.kebabCase(frontmatter.category)

  return (
    <>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <BlogPostStyles>
        <Banner content={frontmatter.title} />

        {/* Check if date or author has been declared in MD file
      If so, render the meta */}
        {(frontmatter.date || frontmatter.author) && (
          <aside className="meta">
            <h2>
              {/* If there is author, display it */}
              Oleh {frontmatter.author && `${frontmatter.author}`}
              {/* If there is date, display it */}
              {frontmatter.date && `, ${frontmatter.date}.`}
            </h2>
          </aside>
        )}

        {/* If featured image is present, render featured image */}
        {featuredImgFluid && (
          <div className="post-img">
            <GatsbyImage image={featuredImgFluid} />
          </div>
        )}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <hr />
        <Link to="/journal" className="btn-link">
          <Button text="Return to Journal Home" />
        </Link>

        {/* If there are category for the post, render this section */}
        {frontmatter.category && (
          <>
            <hr />
            <h6>
              Posted under{" "}
              <Link to={`/journal/${categoryCase}`}>
                {frontmatter.category}
              </Link>
            </h6>
          </>
        )}
        <hr />
        <Share facebook twitter linkedin href={location.href} />
      </BlogPostStyles>
    </>
  )
}
export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        category
        description
        author
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
