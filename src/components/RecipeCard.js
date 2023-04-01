import { Link } from 'react-router-dom'

export default function RecipeCard(props) {
    const divStyle = {
        height: '400px',
        width: '300px',
        boxShadow: '0px 0px 6px grey',
        display: 'inline-block',
        margin: '10px',
    }
    const imgStyle = {
        height:'300px',
        width: '300px',
        backgroundImage: `url(${props.item.pic})`,
        backgroundSize: 'cover',
        margin: 'auto'
    }
    return (
        <div style = {divStyle}>
            <div className="image" style={imgStyle}></div>
            <h5 style={{marginTop: '20px'}}>
                <Link id='link' style={{color:'black', textDecoration: 'none'}} to={`recipe/${props.item.recipe_id}`}>{props.item.recipe_name}</Link>
            </h5>
            <p style={{color:'grey'}}>Uploaded on {props.item.upload_date}</p>
        </div>
    )
}