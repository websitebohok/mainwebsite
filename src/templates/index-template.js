import React from "react"
import { graphql } from "gatsby"
// import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import HomePostRoll from "../components/HomePostRoll"
import styled from "styled-components"
import Banner from "../components/Banner"
import PropTypes from "prop-types"
// import SearchContext from "../components/SearchContext"

const HomepageStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;

  .hr-img {
    position: relative;

    img {
      width: 100%;
      height: 466px;
      object-fit: cover;
    }

    @media (max-width: 900px) {
      left: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      max-width: 100vw;
      position: relative;
      right: 50%;
      width: 100vw;
      margin-top: -1.5rem;
    }

    .hr-title {
      padding: 3rem 4rem;
      position: absolute;
      box-sizing: border-box;
      transform: translate(0%, -100%);
      width: 100%;

      @media (max-width: 762px) {
        padding: 2rem 1.5rem;
      }

      h1,
      p {
        color: var(--white);
        margin: 0;
      }

      h1 {
        line-height: 3rem;
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
    align-items: flex-start;
    gap: 1.5rem;

    @media (max-width: 560px) {
      flex-flow: column nowrap;
    }

    .posts-roll {
      margin-bottom: 1rem;
      flex: 1 1 20rem;
    }
  }

  div.st-line {
    width: 10rem;
    border-bottom: 2px solid var(--black);
  }
`

const Index = ({
  SEOtitle,
  SEOdescription,
  title,
  description,
  image,
  imageAlt,
  html,
  FeaturedPostQuery,
  LatestPostQuery,
}) => {
  // const [isSearch, setSearch] = useContext(SearchContext)

  // const toggleSearch = () => {
  //   setSearch((isSearch) => !isSearch)
  // }

  return (
    <>
      <Seo title={SEOtitle} description={SEOdescription} />
      <HomepageStyle>
        <div className="hr-img">
          <img src={image} alt={imageAlt} loading="lazy" />
          <div className="hr-title">
            <Banner content={title} />
            <p>{description}</p>
          </div>
        </div>

        <div className="hp-posts-roll">
          <div className="posts-roll">
            <h6>Artikel Unggulan</h6>
            <div className="st-line" />
            {FeaturedPostQuery &&
              FeaturedPostQuery.edges.map(({ node }, index) => (
                <HomePostRoll nodeObj={node} key={`featured-post-${index}`} />
              ))}
          </div>
          <div className="posts-roll">
            <h6>Artikel Terkini</h6>
            <div className="st-line" />
            {LatestPostQuery &&
              LatestPostQuery.edges.map(({ node }, index) => (
                <HomePostRoll nodeObj={node} key={`latest-post-${index}`} />
              ))}
          </div>
        </div>
        <div className="br-line"></div>
        {html && (
          <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </HomepageStyle>
    </>
  )
}

Index.propTypes = {
  SEOtitle: PropTypes.string,
  SEOdescription: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  html: PropTypes.string,
  FeaturedPostQuery: PropTypes.object.isRequired,
  LatestPostQuery: PropTypes.object.isRequired,
}

const IndexTemplate = ({ data }) => {
  const {
    HomePageQuery: { frontmatter, html },
    FeaturedPostQuery,
    LatestPostQuery,
  } = data

  return (
    <Index
      SEOtitle={frontmatter.SEO.SEOtitle}
      SEOdescription={frontmatter.SEO.SEOdescription || frontmatter.description}
      title={frontmatter.title}
      description={frontmatter.description}
      image={frontmatter.heroImage}
      imageAlt={frontmatter.featuredImageAlt}
      html={html}
      FeaturedPostQuery={FeaturedPostQuery}
      LatestPostQuery={LatestPostQuery}
    />
  )
}

IndexTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexTemplate

export const query = graphql`
  query IndexTemplate($slug: String!) {
    HomePageQuery: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        SEO {
          SEOtitle
          SEOdescription
        }
        title
        description
        heroImage
        featuredImageAlt
      }
      html
    }

    FeaturedPostQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "post-template" }
          featuredpost: { eq: true }
          category: { ne: "pranala" }
        }
      }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMM DD, YYYY")
            category
          }
          timeToRead
        }
      }
    }
    LatestPostQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "post-template" }
          category: { ne: "pranala" }
        }
      }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMM DD, YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`
