import React from "react"
import BlogGroup from "./BlogGroup"
import styled, { css } from "styled-components"
import { renderToStaticMarkup as rtsm } from "react-dom/server"
import { FaPlus, FaMinus } from "react-icons/fa"

const plusIcon = css`
  ${rtsm(<FaPlus size={12} color="FFFDFD" />).replace(/"/g, "'")}
`

const minusIcon = css`
  ${rtsm(<FaMinus size={12} color="FFFDFD" />).replace(/"/g, "'")}
`

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
        content: url("data:image/svg+xml; utf8,${plusIcon}");
        float: left;
        margin-right: 1.5rem;
      }

      &.active {
        background-color: var(--black);

        &:before {
          content: url("data:image/svg+xml; utf8,${minusIcon}");
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
