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
    componentDidUpdate(){
        localStorage.setItem("favouriteMovie",JSON.stringify(this.state.likedMovies));
    }
    componentWillMount(){
        if(JSON.parse(localStorage.getItem("favouriteMovie"))){
            this.setState({likedMovies:JSON.parse(localStorage.getItem("favouriteMovie"))});
        }
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
