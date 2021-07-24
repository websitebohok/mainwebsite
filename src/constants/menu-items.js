import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

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
    path: "/journal",
    title: "essay",
  },
  {
    path: "/contact",
    title: "photo",
  },
  {
    path: "/contact",
    title: "blog",
  },
  {
    path: "/contact",
    title: "index",
  },
]

export const journalMenuItems = [
  { path: "/journal", title: "journal" },
  {
    path: "/journal/category-1",
    title: "category1",
  },
  {
    path: "/journal/category-2",
    title: "category2",
  },
  {
    path: "/journal/category-3",
    title: "category3",
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
    logo: "https://www.gatsbyjs.com/Gatsby-Logo.svg",
    logoWidth: "72",
  },
]
