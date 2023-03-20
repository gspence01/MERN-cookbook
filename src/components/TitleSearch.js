export default function TitleSearch () {
    return (
        <div className="cover-photo">
            <div className="form-container">
                <h4>Find a recipe</h4>
                <form>
                    <button type='submit'>Search</button>
                    <input name = 'searchRecipes' type='search' placeholder="search recipes, recipe types, and more"></input>
                </form>
            </div>
        </div>
    )
}