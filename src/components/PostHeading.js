import React from "react"
import Share from "./../components/ShareContainer"
import styled from "styled-components"

const PostHeadingStyle = styled.div`
  margin-bottom: 2rem;

  .heading-category {
    margin: 0;
    font-size: var(--xlPara);
    text-transform: capitalize;
  }

  .heading-title {
    margin: 0 0 1rem;
  }

  .heading-description {
    font-size: var(--lPara);
    margin: 0 0 1rem;
  }

  .meta {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) {
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
    }

    .ml {
      display: flex;
      flex-flow: row wrap;

      @media (max-width: 480px) {
        order: 2;
      }

      .bullet {
        padding: 0 0.5rem;
      }

      p {
        margin: 0;
      }
    }
  }
`

const PostHeading = ({
  date,
  title,
  category,
  description,
  author,
  timeToRead,
  location,
}) => {
  return (
    <PostHeadingStyle>
      <p className="heading-category">{category}</p>
      <h2 className="heading-title">{title}</h2>
      {description && <p className="heading-description">{description}</p>}

      {/* Check if date or author has been declared in MD file
      If so, render the meta */}
      {(date || author) && (
        <aside className="meta">
          <div className="ml">
            {author && <p className="subPara">{author}</p>}
            {date && (
              <>
                <p className="subPara bullet">•</p>
                <p className="subPara">{date}</p>
              </>
            )}
            {timeToRead && (
              <>
                {" "}
                <p className="subPara bullet">•</p>
                <p className="subPara">{`${timeToRead} min read`}</p>
              </>
            )}
          </div>
          <Share facebook twitter linkedin href={location.href} />
        </aside>
      )}
    </PostHeadingStyle>
  )
}

export default PostHeading
