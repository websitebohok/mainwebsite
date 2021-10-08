import React, { useState } from "react"

// Create the menu context
const SearchContext = React.createContext()

export function SearchProvider({ children }) {
  // Access this state around the app
  const [isSearch, setSearch] = useState([])

  return (
    <SearchContext.Provider value={[!isSearch, setSearch]}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContext
