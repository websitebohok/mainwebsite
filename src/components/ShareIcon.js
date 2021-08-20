import React from "react"

const ShareIcon = ({ shareUrl, children, label }) => {
  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopenner noreferrer"
      aria-label={`Share on ${label}`}
    >
      {children}
    </a>
  )
}

export default ShareIcon
