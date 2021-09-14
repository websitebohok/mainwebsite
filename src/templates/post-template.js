import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import PostHeading from "../components/PostHeading"
import HomePostRoll from "../components/HomePostRoll"
import styled from "styled-components"
import PropTypes from "prop-types"

const _ = require("lodash")

const BlogPostStyles = styled.div`
  width: 80%;
  // max-width: 656px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  .post-img {
    margin: calc(var(--spacing) * 2) 0;
  }

  a {
    text-decoration: underline;
    color: var(--black);

    &:hover,
    &:focus {
      cursor: pointer;
      text-decoration: none;
    }
  }

  div.post-roll {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    article {
      flex: 1 0 45%;

      @media (max-width: 600px) {
        flex: 1 0 100%;
      }

      a {
        text-decoration: none;
      }
    }
  }
`

const Post = ({
  html,
  timeToRead,
  date,
  title,
  category,
  description,
  author,
  image,
  imageAlt,
  location,
  similarPost,
}) => {
  const categoryCase = _.kebabCase(category)

  const firstImg = getImage(image)
  const SEOimage = image ? image.childImageSharp.resize : null

  return (
    <>
      <Seo title={title} description={description} image={SEOimage} article />
      <BlogPostStyles>
        <PostHeading
          date={date}
          title={title}
          category={category}
          description={description}
          author={author}
          timeToRead={timeToRead}
          location={location}
        />
        {image && (
          <div className="post-img">
            <GatsbyImage image={firstImg} alt={imageAlt} />
            {imageAlt && <div className="img-title">{imageAlt}</div>}
          </div>
        )}
        {html && (
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
        <div className="br-line" />
        {category && (
          <p>
            Artikel lainnya dalam kategori{" "}
            <Link to={`/${categoryCase}`}>{_.capitalize(category)}</Link>
          </p>
        )}
        <div className="post-roll">
          {similarPost &&
            similarPost.map(({ node }, index) => (
              <HomePostRoll nodeObj={node} key={`similar-post-${index}`} />
            ))}
        </div>
      </BlogPostStyles>
    </>
  )
}

Post.propTypes = {
  html: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string.isRequired,
  image: PropTypes.object,
  imageAlt: PropTypes.string,
  location: PropTypes.object.isRequired,
  similarPost: PropTypes.array,
}

const PostTemplate = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
    markdownRemark: { timeToRead, frontmatter, html },
  } = data // Object destructuring

  const location = useLocation()

  return (
    <Post
      html={html}
      timeToRead={timeToRead}
      date={frontmatter.date}
      title={frontmatter.title}
      category={frontmatter.category}
      description={frontmatter.description}
      author={frontmatter.author}
      image={frontmatter.featuredImage}
      imageAlt={frontmatter.featuredImageAlt}
      location={location}
      similarPost={edges}
    />
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostTemplate

export const pageQuery = graphql`
  query PostTemplate($slug: String!, $category: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
        category
        description
        author
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        featuredImageAlt
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "post-template" }
          category: { in: [$category] }
        }
        fields: { slug: { ne: $slug } }
      }
      limit: 10
    ) {
      edges {
        node {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`
