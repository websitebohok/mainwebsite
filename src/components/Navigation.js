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

const Navigation = ({ author, authorSite, telephone }) => {
  const [isOpen, setNav] = useContext(MenuContext)

  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
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
        <li>Jakarta, Indonesia</li>
        <li>
          <a
            className="telephone"
            href={`tel:${telephone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {telephone}
          </a>
        </li>
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
                {item.logo ? (
                  <img src={item.logo} alt={item.name} width={item.logoWidth} />
                ) : (
                  item.name
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </NavigationStyles>
  )
}

export default Navigation
