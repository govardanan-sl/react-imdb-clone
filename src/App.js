import './App.css';
import Home from './Home/Home';
import NavMenu from './NavMenu/NavMenu';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import MovieDetail from './MovieDetail/MovieDetail';
import { useState } from 'react';
import Favourites from './Favourites/Favourites';
import FavouriteMoviesContextProvider from './Contexts/FavouriteMovies';

function App() {
  const [favourites,setFavourites]= useState([]);
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
              <Favourites data={favourites}/>
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
