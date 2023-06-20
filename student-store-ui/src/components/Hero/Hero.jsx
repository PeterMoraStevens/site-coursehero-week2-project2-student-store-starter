import * as React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
      {/* display the main instructions for the website, and background */}
      <h1>Welcome!<br/>
      Find Your Merch!
      </h1>
      <p>
      We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.
      </p>
      </div>
      <img src="../src/img/student_store_icon.18e5d61a.svg"/>
    </div>
  )
}