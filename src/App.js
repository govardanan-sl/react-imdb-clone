import './App.css';
import Home from './Home/Home';
import NavMenu from './NavMenu/NavMenu';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import MovieDetail from './MovieDetail/MovieDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu/>
        <Switch>
          <Route exact path="/react-imdb-clone">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/movie/:id">
            <MovieDetail/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
