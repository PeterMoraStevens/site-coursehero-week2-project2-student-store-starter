import * as React from "react"
import Hero from "../Hero/Hero"
import ItemGrid from "../ItemGrid/ItemGrid"
import "./Home.css"

export default function Home( { itemData } ) {
  return (
    <div className="home" id="home">
      {/* hero section for displaying the  main cover, a welcome message, and instructions*/}
      <Hero/>
      <ItemGrid itemData={ itemData }/>
      {/* should have a grid of elements which contains the items sold in the store */}
      {/* <ItemGrid itemData={ itemData }/> */}
      
    </div>
  )
}
