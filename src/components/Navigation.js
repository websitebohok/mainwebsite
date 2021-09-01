import { Link } from "gatsby"
import React, { useContext } from "react"
import {
  mainMenuItems,
  footerMenuItems,
  socialMenuItems,
  creditMenuItems,
} from "../constants/menu-items"
import { NavigationStyles } from "../styles/NavStyles"
import MenuContext from "./MenuContext"

const Navigation = ({ author, authorSite, address }) => {
  const [isOpen, setNav] = useContext(MenuContext)

  const toggleNav = () => {
    setNav([])
  }

  return (
    <NavigationStyles className={isOpen ? "open" : "closed"}>
      <ul className="mainMenu">
        {mainMenuItems.map((item, index) => (
          <li key={`mainMenu${index}`} className="nav-link">
            <Link to={item.path} onClick={toggleNav} activeClassName="active">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {socialMenuItems && (
        <ul className="socialMenu">
          {socialMenuItems.map((item, index) => {
            return (
              <li key={`socialMenu${index}`}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={`Author's ${item.name}`}
                >
                  {item.icon}
                </a>
              </li>
            )
          })}
        </ul>
      )}
      <ul className="contactMenu">
        <li>{address}</li>
        <li>
          <a href={authorSite} target="_blank" rel="noopener noreferrer">
            &copy; {new Date().getFullYear()} {author}
          </a>
        </li>
      </ul>
      {footerMenuItems && (
        <ul className="additionalMenu">
          {footerMenuItems.map((item, index) => (
            <li key={`additionalMenu${index}`}>
              <Link to={item.path} onClick={toggleNav}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {creditMenuItems && (
        <ul className="creditMenu">
          {creditMenuItems.map((item, index) => (
            <li key={`creditMenu${index}`}>
              {item.title}&nbsp;
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                {item.logo ? item.logo : item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </NavigationStyles>
  )
}

export default Navigation
