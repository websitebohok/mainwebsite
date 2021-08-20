import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"
import gatsbyLogo from "../images/Gatsby-Logo.svg"

export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    path: "/essay",
    title: "essay",
  },
  {
    path: "/photo",
    title: "photo",
  },
  {
    path: "/blog",
    title: "blog",
  },
  {
    path: "/links",
    title: "links",
  },
]

export const socialMenuItems = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/",
    name: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/bohok",
    name: "Instagram",
  },
  {
    icon: <FaTwitter />,
    url: "https://www.twitter.com/bohok",
    name: "Twitter",
  },
  {
    icon: <DiGithubBadge />,
    url: "https://github.com/",
    name: "GitHub",
  },
]

export const footerMenuItems = [
  {
    path: "/contact",
    title: "contact",
  },
  {
    path: "/privacy",
    title: "privacy",
  },
  {
    path: "/cookies",
    title: "cookies",
  },
]

export const creditMenuItems = [
  {
    title: "Site by",
    name: "sngkr",
    url: "https://sngkr.netlify.app/",
    logo: null,
    logoWidth: null,
  },
  {
    title: "Powered by",
    name: "Gatsby",
    url: "https://www.gatsbyjs.com/",
    logo: gatsbyLogo,
    logoWidth: "72",
  },
]
