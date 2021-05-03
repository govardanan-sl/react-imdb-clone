import React, { Component } from 'react';

export const FavouriteMovies = React.createContext()

class FavouriteMoviesContextProvider extends Component {
    state = {
        likedMovies:[]
    }
    addMovie = (movie) =>{
        this.setState({
            likedMovies: [...this.state.likedMovies,movie]
        })
    }
    render() {
        return (
            <FavouriteMovies.Provider value={{...this.state,addMovie:this.addMovie}}>
                {this.props.children}
            </FavouriteMovies.Provider>
        )
    }
}

export default FavouriteMoviesContextProvider;
