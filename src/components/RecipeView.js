import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function(){
    const {id} = useParams()
    const [recipeData, setRecipeData] = useState([])
    useEffect (() => {
        const API_URL = `http://localhost:3001/recipes/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setRecipeData(resData)
        }
        fetchData()
    }, [])
    
    const ingredientsList = recipeData.ingredients?.map((ingredient, index) => {
        return (
            <li key={index}>{ingredient.content}</li>
        )
    })

    const directionsList = recipeData.directions?.map((direction, index) => {
        return (
            <li key={index}>{direction.content}</li>
        )
    })

    const imgStyle = {
        'backgroundImage': `url(../${recipeData.pic})`,
        'width': '400px',
        'height': '400px',
        'backgroundSize': 'cover'
    }
    return (
        <div className='recipeContainer'>
            <h1>{recipeData.recipe_name}</h1>
            
            <div style={imgStyle}></div>
            <p>{recipeData.description}</p>
            <div>
                <h3>Ingredients:</h3>
                <ul>{ingredientsList}</ul>
            </div>
            <div>
                <h3>Directions:</h3>
                <ol>{directionsList}</ol>
            </div>
        </div>
    )
}