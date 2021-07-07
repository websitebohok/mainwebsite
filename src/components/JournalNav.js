import { Link } from "gatsby"
import React, { useContext } from "react"
import { journalMenuItems } from "../constants/menu-items"
import { NavigationStyles } from "../styles/NavStyles"
import MenuContext from "./MenuContext"

const JournalNav = () => {
  return (
    <NavigationStyles>
      <ul>
        {journalMenuItems.map((item, index) => (
          <li key={`menu-item-${index}`} className="nav-link">
            <Link
              to={item.path}
              activeStyle={{
                color: "blue",
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </NavigationStyles>
  )
}

export default JournalNav
