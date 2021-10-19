import React from "react"
import BlogItem from "./BlogItem"

const BlogGroup = ({ category, fieldValue, edges, index }) => {
  const activateList = (e) => {
    e.target.classList.toggle("active")
    const groupContent = e.target.nextElementSibling

    return groupContent.style.maxHeight
      ? (groupContent.style.maxHeight = null)
      : (groupContent.style.maxHeight = groupContent.scrollHeight + "px")
  }

  return (
    <div className="post-list" key={`${category}-${index}`}>
      <button className="list-ttl" onClick={(e) => activateList(e)}>
        {fieldValue}
      </button>
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
}

export default BlogGroup
