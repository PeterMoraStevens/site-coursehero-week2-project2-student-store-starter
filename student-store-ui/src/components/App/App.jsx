import { react, useState, useEffect } from "react"
import { BrowserRouter } from 'react-router-dom'
import { axios } from 'axios'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
// import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import { navLinks, footerLinks } from "../../constants"
import "./App.css"

// Story about routing -> We can think of it like driving a car, and when we know our destination target,
// we can put that into a gps app (google maps) -> this is our link we want to go to, and since we know the destination
// we follow the instructions on how to get to that location which is provided by the app -> the users programmed routes

export default function App() {
// update API searching
const [isFetching, setIsFetching] = useState(false);
const [error, setError] = useState ("");

// check for searched or filtered values
const [currentCategory, setCurrentCategory] = useState("All Categories")
const [searchInputValue, setSearchInputValue] = useState("");

const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchItems = async () => {
    setIsFetching(true);

    try {
      const res = await fetch("https://codepath-store-api.herokuapp.com/store");
      if (res?.data?.products) {
        console.log(res?.data?.products)
       await  setProducts(res.data.products);
      } else {
        setError("Error fetching products.");
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setError(message ?? String(err));
    } finally {
      setIsFetching(false);
    }
  };

  fetchItems();
}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar navLinks={ navLinks }/>
          <Sidebar />
          <Home itemData={products}/>
          {/* <Footer footerLinks={ footerLinks }/> */}
        </main>
      </BrowserRouter>
    </div>
  )
}