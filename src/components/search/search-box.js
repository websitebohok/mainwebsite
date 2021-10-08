import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { FaSearch as SearchIcon } from "react-icons/fa"

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
      <SearchIcon className="SearchIcon" />
      <input
        className="SearchInput"
        type="text"
        placeholder="Cari tulisan..."
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
    </form>
  )
)
