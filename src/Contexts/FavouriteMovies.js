import React, { Component,createContext } from 'react';

export const FavouriteMovies = createContext();

class FavouriteMoviesContextProvider extends Component {
    state = {
        likedMovies:[]
    }
    addMovie = (movie) =>{
        this.setState({
            likedMovies: [...this.state.likedMovies,movie]
        })
    }
    removeMovie = (id) =>{
        this.setState({
            likedMovies:this.state.likedMovies.filter((movie)=>movie.imdbID!==id)
        })
    }
    render() {
        return (
            <FavouriteMovies.Provider value={{...this.state,addMovie:this.addMovie,removeMovie:this.removeMovie}}>
                {this.props.children}
            </FavouriteMovies.Provider>
        )
    }
}

export default FavouriteMoviesContextProvider;
