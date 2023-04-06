import { useContext } from "react"

import { DataContext } from "../context/DataContext"
import RecipeCard from "./RecipeCard"

export default function FavContainer () {
    let data = useContext(DataContext)
    
    const display = data.map((item, index) => {
        if(item.is_faved){
            return (
                <RecipeCard item={item} key={index} />
            )
        }
    })

    return (
        <div>
            <h4 style={{backgroundColor:"rgb(81,151,18)", height: '40px', color:'white', padding: 'auto'}}>Your Favorites</h4>
            <div className="cardContainer" style={{overflowX:'scroll', overflowY:'hidden', whiteSpace:'nowrap'}}>
                {display}
            </div>
            <hr></hr>
        </div>
    )
}