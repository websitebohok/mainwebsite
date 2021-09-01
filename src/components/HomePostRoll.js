import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

const PostsItemStyle = styled.article`
  margin-top: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;

  .hp-category {
    text-transform: capitalize;
    color: var(--black);
  }

  p,
  h5 {
    margin: 0;
    margin-bottom: 0.25rem;
  }

  .meta {
    display: flex;
    flex-flow: row nowrap;
    // text-align: right;
    color: var(--gray);

    .bullet {
      padding: 0 0.5rem;
    }
  }

  a {
    text-decoration: none;
  }
`

const HomePostRoll = ({ nodeObj }) => {
  const {
    fields: { slug },
    frontmatter: { title, description, date, category },
    timeToRead,
  } = nodeObj

  return (
    <PostsItemStyle>
      <Link to={slug}>
        {category && <p className="hp-category">{category}</p>}
        {title && <h5>{title}</h5>}
        {description && <p>{description}</p>}
        <div className="meta">
          {date && <p className="subPara">{date}</p>}
          <p className="subPara bullet">•</p>
          {timeToRead && <p className="subPara">{timeToRead} min read</p>}
        </div>
      </Link>
    </PostsItemStyle>
  )
}

HomePostRoll.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
}

export default HomePostRoll
