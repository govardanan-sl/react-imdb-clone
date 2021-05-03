import React, { Component } from 'react'
import { FavouriteMovies } from '../Contexts/FavouriteMovies';
import MovieCard from '../MovieList/MovieCard';
import './styles.scss';
class Favourites extends Component {
    static contextType=FavouriteMovies;
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        const {likedMovies}=this.context;
        this.setState({
            data:likedMovies
        })
    }
    render() {
        return (
            <div className="row home featured">
                {this.state.data&&(this.state.data).map((movie)=><MovieCard data={movie} key={movie.imdbID}/>)}
            </div>
        )
    }
}

export default Favourites;
