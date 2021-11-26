import React, { useState, useEffect } from "react"
import { StyleSheetManager } from "styled-components"
import GlobalStyles from "../../styles/GlobalStyles"
import Typography from "../../styles/Typography"

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null)

  useEffect(() => {
    const iframe = document.getElementsByTagName("iframe")[0]
    const iframeHeadElem = iframe.contentDocument.head
    setIframeRef(iframeHeadElem)
  }, [])

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    )
  )
}

function CustomPreviewLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <main className="main-body">{children}</main>
    </>
  )
}

export default function withStyledComponentsRendered(Comp) {
  return (props) => (
    <StyleInjector>
      <CustomPreviewLayout>
        <Comp {...props} />
      </CustomPreviewLayout>
    </StyleInjector>
  )
}
