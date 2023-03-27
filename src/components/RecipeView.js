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

    return (
        <p>{recipeData.recipe_name}</p>
    )
}