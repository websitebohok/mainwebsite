import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import HomePostRoll from "../components/HomePostRoll"
import styled from "styled-components"
import Banner from "../components/Banner"
import img from "../components/Banner"

const FeaturedItems = styled.h4`
  font-size: var(--h5);
  color: var(--primaryColor);
`

const HomepageStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;

  .hr-img {
    // overflow: hidden;
    min-height: 300px;

    img {
      min-height: 466px;
    }

    @media (max-width: 900px) {
      img {
        position: absolut;
        // left: -50%;
        // margin-left: -50vw;
        // margin-right: -50vw;
        // max-width: 100vw;
        // position: relative;
        // right: 50%;
        width: 100vw;
      }
    }

    .hr-title {
      padding: 3rem 4rem;
      position: absolute;
      // top: 0%;
      // left: 50%;
      transform: translate(0%, -100%);
      // -ms-transform: translate(-50%, -50%)

      h1,
      p {
        color: var(--white);
        margin: 0;
      }

      p {
        margin-left: 0.25rem;
      }
    }
  }

  div.hp-posts-roll {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;

    .posts-roll {
      margin-bottom: 2rem;
      flex-grow: 1;
    }
  }

  div.st-line {
    width: 10rem;
    border-bottom: 2px solid var(--black);
  }
`

const HomePage = ({ data }) => {
  const { HomePageQuery, BlogPostQuery } = data
  let featuredImgFluid =
    HomePageQuery.frontmatter.featuredImage.childImageSharp.gatsbyImageData

  return (
    <>
      <Seo
        title={HomePageQuery.frontmatter.title}
        description={HomePageQuery.frontmatter.description}
      />
      <HomepageStyle>
        <div className="hr-img">
          <GatsbyImage image={featuredImgFluid} />
          <div className="hr-title">
            <Banner content={HomePageQuery.frontmatter.title} />
            <p>{HomePageQuery.frontmatter.description}</p>
          </div>
        </div>
        <div className="hp-posts-roll">
          <div className="posts-roll">
            <h6>Featured Posts</h6>
            <div className="st-line" />
            {BlogPostQuery.edges.map(({ node }, index) => (
              <HomePostRoll nodeObj={node} itemKey={`featured-post-${index}`} />
            ))}
          </div>
          <div className="posts-roll">
            <h6>Latest Posts</h6>
            <div className="st-line" />
            {BlogPostQuery.edges.map(({ node }, index) => (
              <HomePostRoll nodeObj={node} itemKey={`latest-post-${index}`} />
            ))}
          </div>
        </div>
        <div className="br-line"></div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: HomePageQuery.html }}
        />
      </HomepageStyle>
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
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 466)
          }
        }
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
            description
            date(formatString: "MMM DD, YYYY")
            path
            category
          }
        }
      }
    }
  }
`
