import * as React from "react"
import "./Footer.css"

export default function Footer( footerLinks ) {
  console.log(footerLinks.categories)
  return (
    // container which will put elements in a row
    <div className="footer-container">
        {/* categories going into a column */}
      <div className="footer-categories">
        <FooterLinks footerLinks={ footerLinks }/>
      </div>
        {/* company section of footer */}
        
        {/* support section of footer */}

        {/* account section of footer */}

        {/* social section of footer */}

        {/* the two apps installiation section */}
    </div>
  )
}


export function FooterLinks( footerLinks ) {
  return (
    <ul className="footer-links">
    { footerLinks.map((footerLink, index) => (
      <FooterLink footerLink={ footerLink } key={ index }/>
    ))}
  </ul>
);}

export function FooterLink({ footerLink }) {
  return (
    <li>
      <span>{footerLink}</span>
    </li>
  )
}