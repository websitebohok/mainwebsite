import { Link } from "gatsby"
import React, { useContext } from "react"
import { mainMenuItems } from "../constants/menu-items"
import { NavigationStyles } from "../styles/NavStyles"
import MenuContext from "./MenuContext"

const Navigation = () => {
  const [isOpen, setNav] = useContext(MenuContext)

  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  return (
    <NavigationStyles className={isOpen ? "open" : "closed"}>
      <ul>
        {mainMenuItems.map((item, index) => (
          <li key={`menu-item-${index}`} className="nav-link">
            <Link to={item.path} onClick={toggleNav}>
              {item.subMenu && item.subMenu.length > 0
                ? item.title + " v"
                : item.title}
            </Link>
            {item.subMenu && item.subMenu.length > 0 ? (
              <ul aria-label="submenu">
                {item.subMenu.map((subLink) => (
                  <li key={subLink.title}>
                    <Link to={subLink.path}>{subLink.title}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </NavigationStyles>
  )
}

export default Navigation
