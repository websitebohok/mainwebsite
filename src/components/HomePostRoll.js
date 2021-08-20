import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

const _ = require("lodash")

const PostsItemStyle = styled.article`
  margin-top: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
  // max-width: 25rem;
  // min-width: 20rem;

  // @media (min-width: 768px) {
  //   margin: calc(var(--spacing) * 4) 0;
  // }

  // @media (min-width: 1200px) {
  //   margin: calc(var(--spacing) * 4) 0;

  // }
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
    frontmatter: { title, description, date, path, category, webname },
    timeToRead,
  } = nodeObj

  return (
    <PostsItemStyle>
      {category === "links" ? (
        <a href={path} target="_blank" rel="noopener noreferrer">
          {category && <p className="hp-category">{category}</p>}
          {title && <h5>{title}</h5>}
          {description && <p>{description}</p>}
          <div className="meta">
            {date && <p className="subPara">{date}</p>}
            <p className="subPara bullet">•</p>
            {timeToRead && <p className="subPara">{_.capitalize(webname)}</p>}
          </div>
        </a>
      ) : (
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
      )}
    </PostsItemStyle>
  )
}

HomePostRoll.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  webname: PropTypes.string,
}

export default HomePostRoll
