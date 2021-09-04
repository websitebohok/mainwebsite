import React from "react"
import BlogItem from "./BlogItem"
import styled from "styled-components"

const BlogGroupStyle = styled.div`
  width: 100%;

  div.post-list {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 2rem;

    div.list-ttl {
      margin-bottom: 1rem;
      display: flex;
      border-left: 4px solid var(--gray);
      // border-bottom: 4px solid var(--gray);

      h5 {
        width: auto;
        padding: 0.5rem 1rem 0.5rem 0.5rem;
        margin: 0;
        // background-color: var(--gray);
        color: var(--gray);
        letter-spacing: 0.5px;
        text-transform: capitalize;
        // border-bottom: 2px solid var(--gray);
      }

      div.st-line {
        width: 100%;
        border-bottom: 3px solid var(--black);
      }
    }

    div.list-items {
      padding-left: 14px;
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
              <div className="list-items">
                {edges.map(({ node }, index) => {
                  return (
                    <BlogItem
                      nodeObj={node}
                      key={`${category}-${fieldValue}-${index}`}
                    />
                  )
                })}
              </div>
            </div>
          )
        })
        .reverse()}
    </BlogGroupStyle>
  )
}

export default BlogGroup
