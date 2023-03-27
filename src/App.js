import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import Navigation from './components/Navbar';
import TitleSearch from './components/TitleSearch';
import FavContainer from './components/FavContainer';
//import PopularContainer from './components/PopularContainer';
import NewestContainer from './components/NewestContainer';

//Context
import { DataContext } from './context/DataContext';

function App() {
  let [recipeList, setRecipeList] = useState([])
  
  useEffect (() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/recipes')
        const resData = await response.json()
        setRecipeList(resData)
      }
      catch (err) {
        console.log('error', err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <TitleSearch />
              <DataContext.Provider value={recipeList}>
                <FavContainer />
                <NewestContainer />
              </DataContext.Provider>
            </Fragment>
          } />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
