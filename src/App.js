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
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetail/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
