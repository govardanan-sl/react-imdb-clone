import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
function MovieCard({data}) {
    return (
      <Link to={`/movie/${data.imdbID}`}>
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
                <li><a href="#" className="fa fa-heart-o"><span></span></a></li>
                <li><a>Votes <span>{data.imdbVotes}</span></a></li>
              </ul>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">{data.Director}</span>
                <h1 className="title"><a href="#">{data.Title}</a></h1>
                <p className="text">{data.Plot}</p>
                <a href="#" className="button">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
}

export default MovieCard;
