import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import PropTypes from "prop-types"

const BlogItemStyles = styled.article`
  margin: calc(var(--spacing) * 4) 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin: calc(var(--spacing) * 4) 0;
  }

  @media (min-width: 1200px) {
    margin: calc(var(--spacing) * 4) 0;
  }

  > figure {
    overflow: hidden;
    background-color: #000;
    margin: 0;
    opacity: 1;

    img {
      transition: transform var(--transSlow) ease, opacity var(--transSlow) ease !important;
      opacity: 1;
    }
  }

  &:hover {
    > figure {
      img {
        transform: scale(1.1);
        opacity: 0.5 !important;
      }
    }
  }

  h2 {
    width: 100%;
    font-size: var(--h3);
    margin: 0.5rem 0;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    h2 {
      margin: 1rem 0;
    }
  }

  > div {
    width: 100%;
    p {
      margin-top: 0;
    }
    @media (min-width: 768px) {
      p {
        margin-bottom: calc(var(--spacing) * 2);
      }
    }
  }

  .meta {
    display: flex;
    justify-content: space-between;

    h4 {
      margin: 0;
      font-size: var(--h6);
      color: var(--primaryColor);
    }
  }
`

const BlogItem = ({ index, nodeObj }) => {
  const {
    excerpt,
    frontmatter: { title, date, path, featuredImageAlt, featuredImage },
  } = nodeObj
  const image = getImage(featuredImage)

  return (
    <BlogItemStyles key={`blog-item-${index}`}>
      <Link to={path}>
        {title && <h2>{title}</h2>}

        {excerpt && (
          <div>
            <Link to={path}>
              <p>{excerpt}</p>
            </Link>
            {path && (
              <div className="meta">
                <Link className="btn-link" to={path}>
                  Read more
                </Link>
                <h4>{date}</h4>
              </div>
            )}
          </div>
        )}
      </Link>
    </BlogItemStyles>
  )
}

BlogItem.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.string,
}

export default BlogItem

// {
//   image && (
//     <figure>
//       <Link to={path}>
//         <span className="sr-only">{title}</span>
//         <GatsbyImage loading="lazy" image={image} alt={featuredImageAlt} />
//       </Link>
//     </figure>
//   )
// }

{
  /* <BlogItemStyles key={`blog-item-${index}`}>
      {title && (
        <h2>
          <Link to={path}>{title}</Link>
        </h2>
      )}

      {excerpt && (
        <div>
          <Link to={path}>
            <p>{excerpt}</p>
          </Link>
          {path && (
            <div className="meta">
              <Link className="btn-link" to={path}>
                Read more
              </Link>
              <h4>{date}</h4>
            </div>
          )}
        </div>
      )}
    </BlogItemStyles> */
}
