import './App.css';
//import Home from './Home/Home';
import NavMenu from './NavMenu/NavMenu';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import MovieDetail from './MovieDetail/MovieDetail';
import Favourites from './Favourites/Favourites';
import FavouriteMoviesContextProvider from './Contexts/FavouriteMovies';
import loadable from '@loadable/component'

const Home = loadable(() => import('./Home/Home'/* webpackChunkName: "Home" */),{
  fallback: <div>Loading...</div>
});

// const MovieDetail = loadable(() => import('./MovieDetail/MovieDetail'/* webpackChunkName: "MovieDetail" */),{
//   fallback: <div>Loading...</div>
// });

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu/>
        <Switch>
          <FavouriteMoviesContextProvider>
            <Route exact path="/react-imdb-clone">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/favourites">
              <Favourites/>
            </Route>
            <Route path="/search/movie/:id">
              <MovieDetail/>
            </Route>
            <Route path="/movie/:id">
              <MovieDetail/>
            </Route>
          </FavouriteMoviesContextProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
