import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './components/Navbar';
import TitleSearch from './components/TitleSearch';

function App() {
  return (
    <div className="App">
      <Navigation />
      <TitleSearch />
    </div>
  );
}

export default App;
