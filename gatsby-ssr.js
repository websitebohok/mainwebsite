import React from "react"
import Layout from "./src/components/Layout"
import { MenuProvider } from "./src/components/MenuContext"
import { SearchProvider } from "./src/components/SearchContext"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return (
    <SearchProvider>
      <MenuProvider>{element}</MenuProvider>
    </SearchProvider>
  )
}
