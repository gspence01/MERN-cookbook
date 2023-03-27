import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState, useEffect, Fragment, Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import Navigation from './components/Navbar';
import TitleSearch from './components/TitleSearch';
import FavContainer from './components/FavContainer';
//import PopularContainer from './components/PopularContainer';
import NewestContainer from './components/NewestContainer';
import RecipeView from './components/RecipeView';

//Context
import { DataContext } from './context/DataContext';

function App() {
  let [recipeList, setRecipeList] = useState([{},{}])
  
  useEffect (() => {
    let api_URL = 'http://localhost:3001/recipes'

    fetch(api_URL)
    .then((response) => {
      if(!response.ok){
        throw new Error("not good bro")
      }
      return response.json()
    })
    .then((resData) => {
      setRecipeList(resData)
      console.log(resData)
    })
    .catch((error) => console.log("error", error))
  }, [])

  
  return (
    <div className="App">
      
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <TitleSearch />
              <Suspense fallback= {<h2>Loading...</h2>}>
                <DataContext.Provider value={recipeList}>
                  <FavContainer />
                  <NewestContainer />
                </DataContext.Provider>
              </Suspense>
            </Fragment>
          } />
          <Route path='recipe/:id' element = {<RecipeView />} />
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
