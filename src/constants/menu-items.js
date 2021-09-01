import React from "react"
import { FaInstagram } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import GatsbyLogo from "../images/Gatsby-Logo.svg"
import MediumSymbol from "../images/medium-symbol.svg"
import SubstackSymbol from "../images/substack-symbol.svg"

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
    icon: <SiGmail />,
    url: "mailto:kakbohok@gmail.com",
    name: "Gmail",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/bohok",
    name: "Instagram",
  },
  {
    icon: <SubstackSymbol />,
    url: "https://bohok.substack.com/",
    name: "Substack",
  },
  {
    icon: <MediumSymbol />,
    url: "https://alvaryanm.medium.com/",
    name: "Medium",
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
    title: "Dibuat dengan",
    name: "Gatsby",
    url: "https://www.gatsbyjs.com/",
    logo: <GatsbyLogo />,
    logoWidth: "72",
  },
]
