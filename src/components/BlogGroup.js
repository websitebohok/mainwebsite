import React from "react"
import BlogItem from "./BlogItem"
import styled from "styled-components"

const BlogGroupStyle = styled.div`
  width: 100%;

  .post-list {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 2rem;

    .list-ttl {
      margin-bottom: 1rem;
      display: flex;

      h5 {
        width: auto;
        padding: 0.5rem 1rem;
        margin: 0;
        background-color: var(--black);
        color: var(--white);
        text-transform: capitalize;
      }
    }
  }
`

const BlogGroup = ({ group, category }) => {
  return (
    <BlogGroupStyle>
      {group
        .map(({ edges, fieldValue }, index) => {
          return (
            <div className="post-list" key={`${category}-${index}`}>
              <div className="list-ttl">
                <h5>{fieldValue}</h5>
              </div>
              {edges.map(({ node }, index) => {
                return (
                  <BlogItem
                    nodeObj={node}
                    key={`${category}-${fieldValue}-${index}`}
                  />
                )
              })}
            </div>
          )
        })
        .reverse()}
    </BlogGroupStyle>
  )
}

export default BlogGroup
