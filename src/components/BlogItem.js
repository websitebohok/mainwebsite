import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

const BlogItemStyles = styled.article`
  // margin: 0 0 1rem;
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  p {
    width: 100%;
    margin: 0 0 0.25rem;
  }

  h6 {
    width: 100%;
    margin: 0 0 1rem;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    h2 {
      margin: 1rem 0;
    }
  }

  .meta {
    display: flex;
    justify-content: space-between;
  }
`

const BlogItem = ({ nodeObj }) => {
  const {
    fields: { slug },
    frontmatter: { title, date, path, category },
  } = nodeObj

  return (
    <BlogItemStyles>
      {category === "links" ? (
        <a href={path} target="_blank" rel="noopener noreferrer">
          {date && <p className="subPara">{date}</p>}
          {title && <h6>{title}</h6>}
        </a>
      ) : (
        <Link to={slug}>
          {date && <p className="subPara">{date}</p>}
          {title && <h6>{title}</h6>}
        </Link>
      )}
    </BlogItemStyles>
  )
}

BlogItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
}

export default BlogItem
