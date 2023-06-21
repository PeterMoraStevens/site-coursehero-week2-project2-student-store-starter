import {React} from "react"
import "./SearchBar.css"

export default function SearchBar( { handleFilter, handleOnChange, searchTerm} ){
    return (
        <div className="filter-menu">
            <form>
                <textarea value={searchTerm} onChange={handleFilter}></textarea>
            </form>
            <div className="category-selector-container">
                <ul>
                    <li>
                        All-Categories
                    </li>
                    <li>
                        Clothing
                    </li>
                    <li>
                        Food
                    </li>
                    <li>
                        Accessories
                    </li>
                    <li>
                        Tech
                    </li>
                </ul>
            </div>
        </div>
    )
}