import React from "react"
import { FaInstagram, FaMedium } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import gatsbyLogo from "../images/Gatsby-Logo.svg"

export const mainMenuItems = [
  {
    path: "/",
    title: "beranda",
  },
  {
    path: "/tentang-kami",
    title: "tentang kami",
  },
  {
    path: "/esai",
    title: "esai",
  },
  {
    path: "/foto",
    title: "foto",
  },
  {
    path: "/blog",
    title: "blog",
  },
  {
    path: "/pranala",
    title: "pranala",
  },
]

export const socialMenuItems = [
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/bohok",
    name: "Instagram",
  },
  {
    icon: <FaMedium />,
    url: "https://alvaryanm.medium.com/",
    name: "Medium",
  },
  {
    icon: <SiGmail />,
    url: "mailto:kakbohok@gmail.com",
    name: "Gmail",
  },
]

export const footerMenuItems = [
  {
    path: "/kontak",
    title: "kontak",
  },
  {
    path: "/privasi",
    title: "privasi",
  },
  {
    path: "/cookies",
    title: "cookies",
  },
]

export const creditMenuItems = [
  {
    title: "Situs oleh",
    name: "sngkr",
    url: "https://sngkr.netlify.app/",
    logo: null,
    logoWidth: null,
  },
  {
    title: "Didukung oleh",
    name: "Gatsby",
    url: "https://www.gatsbyjs.com/",
    logo: gatsbyLogo,
    logoWidth: "72",
  },
]
