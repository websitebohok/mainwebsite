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
      border-left: 4px solid var(--black);
      // border-bottom: 2px solid var(--black);

      h6 {
        width: auto;
        padding: 0.5rem 1rem 0.5rem 0.5rem;
        margin: 0;
        // background-color: var(--black);
        color: var(--black);
        letter-spacing: 0.5px;
        text-transform: capitalize;
      }

      div.st-line {
        width: 100%;
        border-bottom: 3px solid var(--black);
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
                {/* <div className="st-line"></div> */}
                <h6>{fieldValue}</h6>
                {/* <div className="st-line"></div> */}
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
