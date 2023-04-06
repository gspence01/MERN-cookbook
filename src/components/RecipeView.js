import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function RecipeView(){
    const {id} = useParams()
    const [recipeData, setRecipeData] = useState([])
    const [faved, setFaved] = useState()

    useEffect (() => {
        const API_URL = `http://localhost:3001/recipes/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setRecipeData(resData)
            setFaved(resData.is_faved)
        }
        fetchData()
    }, [id])
    
    /*const favARecipe = () => {
        setFaved(!faved)
        
        const API_URL = `http://localhost:3001/recipes/${id}`
        fetch(API_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"is_faved": faved})
        })
        .then((response) => {
            return response.json();
        })
        .then((resData) => {
            console.log(resData.data)
        })
        .catch((err) => {
            console.log('error', err)
        })
    }*/

    useEffect (() => {
        const API_URL = `http://localhost:3001/recipes/${id}`
        fetch(API_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"is_faved": faved})
        })
        .then((response) => {
            return response.json();
        })
        .then((resData) => {
            console.log(resData.data.is_faved)
        })
        .catch((err) => {
            console.log('error', err)
        })
    }, [faved, id])

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
        'backgroundSize': 'cover',
        'margin': 'auto'
    }

    const unfavStyle = {
        'backgroundImage':'url(../icon-unliked.png)',
        'height': '40px',
        'width':'40px',
        'backgroundSize': 'cover'
    }
    const favStyle = {
        'backgroundImage':'url(../icon-liked.png)',
        'height': '40px',
        'width':'40px',
        'backgroundSize': 'cover'
    }

    const red = () => {
        return(
            <div style={favStyle}></div>
        )
    }

    const empty = () => {
        return(
            <div style={unfavStyle}></div>
        )
    }

    return (
        <div className='recipeContainer'>
            <div>
                <h1 style={{display:'inline-block'}}>{recipeData.recipe_name}</h1>
                <div style={{display: 'inline-block'}} onClick={() => setFaved(!faved)}>
                    {faved ? red() : empty()}
                </div>
            </div>
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