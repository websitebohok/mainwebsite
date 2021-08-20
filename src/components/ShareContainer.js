import React from "react"
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa"
import ShareIcon from "./ShareIcon"
import styled from "styled-components"

const ShareArea = styled.div`
  display: flex;
  flex-flow: row nowrap;

  svg {
    fill: var(--gray);
    width: 20px;
    height: 20px;
  }

  a {
    margin-left: var(--spacing);
    display: flex;

    &:first-child {
      margin: 0;
    }

    &:after {
      display: none;
    }

    &:hover > svg,
    svg:hover {
      fill: var(--black);
    }
  }
`

const ShareCont = ({ facebook, twitter, linkedin, href }) => {
  return (
    <ShareArea>
      {twitter && (
        <ShareIcon
          shareUrl={`https://twitter.com/intent/tweet?url=${href}`}
          label="Twitter"
        >
          <FaTwitter />
        </ShareIcon>
      )}
      {facebook && (
        <ShareIcon
          shareUrl={`https://www.facebook.com/sharer.php?u=${href}%2F`}
          label="Facebook"
        >
          <FaFacebook />
        </ShareIcon>
      )}
      {linkedin && (
        <ShareIcon
          shareUrl={`https://www.linkedin.com/sharing/share-offsite/?url=${href}`}
          label="LinkedIn"
        >
          <FaLinkedin />
        </ShareIcon>
      )}
    </ShareArea>
  )
}

export default ShareCont
