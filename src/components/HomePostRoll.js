import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

const PostsItemStyle = styled.article`
  margin-top: 1rem;
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

  p.date {
    // text-align: right;
    color: var(--black);
  }

  a {
    text-decoration: none;
  }
`

const HomePostRoll = ({ itemKey, nodeObj }) => {
  const {
    frontmatter: { title, description, date, path, category },
  } = nodeObj

  return (
    <PostsItemStyle key={itemKey}>
      <Link to={path}>
        {category && <p className="hp-category">{category}</p>}
        {title && <h5>{title}</h5>}
        {description && <p>{description}</p>}
        <p className="subPara date">{date}</p>
      </Link>
    </PostsItemStyle>
  )
}

HomePostRoll.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.string,
}

export default HomePostRoll
