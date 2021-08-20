import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import PostHeading from "../components/PostHeading"
import styled from "styled-components"
import PropTypes from "prop-types"

const _ = require("lodash")

const BlogPostStyles = styled.div`
  width: 80%;
  // max-width: 656px;

  @media (max-width: 1280px) {
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
          <>
            <p>
              Posted under{" "}
              <Link to={`/${categoryCase}`}>{_.capitalize(category)}</Link>
            </p>
          </>
        )}
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
}

const PostTemplate = ({ data }) => {
  const {
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
    />
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostTemplate

export const pageQuery = graphql`
  query PostTemplate($slug: String!) {
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
  }
`
