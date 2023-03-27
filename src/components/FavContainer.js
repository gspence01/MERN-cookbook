import { useContext } from "react"

import { DataContext } from "../context/DataContext"
import RecipeCard from "./RecipeCard"

export default function FavContainer () {
    let data = useContext(DataContext)
    const display = data.map((item, index) => {
        return (
            <RecipeCard item={item} key={index} />
        )
    })

    return (
        <div>
            <h4>Your Favorites</h4>
            <div className="cardContainer" style={{overflowX:'scroll', overflowY:'hidden', whiteSpace:'nowrap'}}>
                {display}
            </div>
            <hr></hr>
        </div>
    )
}