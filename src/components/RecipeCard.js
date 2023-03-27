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
            <h1>{props.item.recipe_name}</h1>
        </div>
    )
}