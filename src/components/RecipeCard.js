import { Link } from 'react-router-dom'

export default function RecipeCard(props) {
    const divStyle = {
        height: '300px',
        width: '300px',
        boxShadow: '0px 0px 4px',
        borderRadius: '10px',
        display: 'inline-block',
        margin: '10px',
        padding: '10px'
    }
    const imgStyle = {
        height:'200px',
        width: '200px',
        backgroundImage: `url(${props.item.pic})`,
        backgroundSize: 'cover',
        margin: 'auto'
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