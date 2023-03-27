import { Link } from 'react-router-dom'

export default function RecipeCard(props) {
    const divStyle = {
        height: '400px',
        width: '300px',
        border: 'solid 1px black',
        borderRadius: '5px',
        display: 'inline-block'
    }
    const imgStyle = {
        height:'200px',
        width: '200px',
        backgroundImage: `url(${props.item.pic})`,
        backgroundSize: 'cover'
    }
    return (
        <div style = {divStyle}>
            <div className="image" style={imgStyle}></div>
            <h5>
                <Link to={`recipe/${props.item.recipe_id}`}>{props.item.recipe_name}</Link>
            </h5>
            <p>{props.item.upload_date}</p>
        </div>
    )
}