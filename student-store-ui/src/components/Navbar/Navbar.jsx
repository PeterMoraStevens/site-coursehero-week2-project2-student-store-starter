import * as React from "react"
import "./Navbar.css"

export default function Navbar( {navLinks} ) {
  return (
    // container for holding all our navbar elements
    <nav className="navbar">
      
      {/* create 3 different divs to contain logo, media icons, and internal href links */}
      <div className="navbar-container">
        {/* we want to map an array of objects as to loop through the items and their tags */}   
        <NavLinks navLinks={ navLinks }/>
      </div>
    </nav>
  )
}

export function NavLinks({ navLinks }) {
  return (
    <ul className="nav-links">
    { navLinks.map((navLink, index) => (
      <NavLink navLink={ navLink } key={ index }/>
    ))}
  </ul>
);}

export function NavLink({ navLink }) {
  const hrefLink = "#" + navLink.label.toLowerCase().split(' ').join('-')
  return (
    <li className={navLink.className}>
      <a href={hrefLink} >{navLink.label}</a>
    </li>
  )
}