import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavouriteMovies } from '../Contexts/FavouriteMovies';
import './styles.scss';
function MovieCard({data}) {
    const [isLiked,setIsLiked]=useState(false);
    const {addMovie,removeMovie,likedMovies}=useContext(FavouriteMovies);
    const checkLiked = ()=>{
      if(likedMovies&&likedMovies.find((movie)=>movie.imdbID===data.imdbID)){
        setIsLiked(true);
      }
    }
    const switchLike=()=>{
      setIsLiked(!isLiked);
      isLiked?removeMovie(data.imdbID):addMovie(data);
    }
    useEffect(() => {
     checkLiked();
    }, [])
    return (
        <div className="card-2 card">
          <div className="wrapper" style={
            {
              backgroundImage: `url("${data.Poster}")`
            }
          }>
            <div className="header">
              <div className="date">
                {/* <span className="day">12</span>
                <span className="month">Aug</span> */}
                <span className="year">{data.Year}</span>
              </div>
              <ul className="menu-content">
                <li>
                  <a href="#" className="fa fa-bookmark-o"></a>
                </li>
                <li onClick={switchLike}><i className={`fa fa-heart${isLiked?'':'-o'}`} style={{color:isLiked?'red':'white'}}><span></span></i></li>
                <li><a>Votes <span>{data.imdbVotes}</span></a></li>
              </ul>
            </div>
            <Link to={`/movie/${data.imdbID}`}>
            <div className="data">
              <div className="content">
                <span className="author">{data.Director}</span>
                <h1 className="title"><a href="#">{data.Title}</a></h1>
                <p className="text">{data.Plot}</p>
                <a href="#" className="button">Read more</a>
              </div>
            </div>
            </Link>
          </div>
        </div>
    )
}

export default MovieCard;
