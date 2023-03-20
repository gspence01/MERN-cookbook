import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//Components
import Navigation from './components/Navbar';
import TitleSearch from './components/TitleSearch';
import FavContainer from './components/FavContainer';
import PopularContainer from './components/PopularContainer';
import NewestContainer from './components/NewestContainer';

function App() {
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
