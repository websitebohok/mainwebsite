import React from "react"
import BlogGroup from "./BlogGroup"
import styled from "styled-components"

const BlogCategoryStyle = styled.div`
  width: 100%;

  div.post-list {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 0.5rem;

    button.list-ttl {
      width: auto;
      padding: 0.5rem 1rem;
      margin: 0;
      border: none;
      outline: none;
      background-color: var(--gray);
      color: var(--white);
      font-family: var(--sansSerif);
      font-size: var(--h6);
      font-weight: var(--heavyWeight);
      text-align: left;
      letter-spacing: 0.5px;
      text-transform: capitalize;
      line-height: normal;

      &:hover {
        cursor: pointer;
        background-color: var(--black);
      }

      &:before {
        text-align: center;
        content: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='16' height='16'%3E%3Cpath fill='%23FFFDFD' d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'%3E%3C/path%3E%3C/svg%3E");
        float: left;
        margin-right: 1.5rem;
      }

      &.active {
        background-color: var(--black);

        &:before {
          content: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='16' height='16'%3E%3Cpath fill='%23FFFDFD' d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' %3E%3C/path%3E%3C/svg%3E");
        }
      }
    }

    div.list-items {
      overflow: hidden;
      max-height: 0;
      margin: 0;
      padding-left: 14px;
      transition: var(--transMed) ease-out;
    }
  }
`

const BlogCategory = ({ group, category }) => {
  return (
    <BlogCategoryStyle>
      {group
        .map(({ edges, fieldValue }, index) => {
          return (
            <BlogGroup
              category={category}
              fieldValue={fieldValue}
              edges={edges}
              index={index}
              key={`${category}-${index}`}
            />
          )
        })
        .reverse()}
    </BlogCategoryStyle>
  )
}

export default BlogCategory
