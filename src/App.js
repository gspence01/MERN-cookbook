import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, {useState, useEffect} from 'react'

//Components
import Navigation from './components/Navbar';
import TitleSearch from './components/TitleSearch';
import FavContainer from './components/FavContainer';
import PopularContainer from './components/PopularContainer';
import NewestContainer from './components/NewestContainer';


function App() {
  //all this crap is just testing my connection between front end and server
  const fetchData = async () => {
    const response = await fetch('http://localhost:3001/recipes')
    const resData = await response.json()
    console.log(resData)
  }
  fetchData()

  return (
    <div className="App">
      <Navigation />
      <TitleSearch />
      <FavContainer />
      <PopularContainer />
      <NewestContainer />
      
    </div>
  );
}

export default App;
